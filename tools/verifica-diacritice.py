"""Verifică dacă fonturile de brand chiar acoperă diacriticele românești.

Regula din CLAUDE.md spune „ro_Latn/latin-ext verificat (ș/ț cu virgulă)".
Scriptul ăsta o dovedește sau o infirmă, în loc s-o repete.

Capcana pe care o caută: în română, ș și ț se scriu cu VIRGULĂ dedesubt
(U+0218-021B), nu cu sedilă (U+015E-0163). Sedila e turcească. Multe fonturi au
doar sedila, iar textul iese vizibil greșit pentru un cititor român.
"""
import glob
import io
import os
import sys

from fontTools.ttLib import TTFont

CU_VIRGULA = {
    0x0218: 'Ș', 0x0219: 'ș', 0x021A: 'Ț', 0x021B: 'ț',
}
CU_SEDILA = {
    0x015E: 'Ş', 0x015F: 'ş', 0x0162: 'Ţ', 0x0163: 'ţ',
}
RESTUL = {
    0x0102: 'Ă', 0x0103: 'ă', 0x00C2: 'Â', 0x00E2: 'â',
    0x00CE: 'Î', 0x00EE: 'î',
}


def coduri(cale):
    f = TTFont(cale, lazy=True)
    puncte = set()
    for tabel in f['cmap'].tables:
        puncte.update(tabel.cmap.keys())
    f.close()
    return puncte


def main(radacina):
    cai = sorted(glob.glob(os.path.join(radacina, '*.ttf')))
    if not cai:
        print('Niciun .ttf în', radacina)
        return 1

    problema = False
    for cale in cai:
        puncte = coduri(cale)
        lipsa_virgula = [c for c in CU_VIRGULA if c not in puncte]
        lipsa_rest = [c for c in RESTUL if c not in puncte]
        are_sedila = [c for c in CU_SEDILA if c in puncte]

        nume = os.path.basename(cale)
        if lipsa_virgula or lipsa_rest:
            problema = True
            stare = 'LIPSESC'
        else:
            stare = 'ok'
        print('%-42s %-8s glifuri: %d' % (nume, stare, len(puncte)))
        if lipsa_virgula:
            print('    fără virgulă: ' + ' '.join(
                'U+%04X %s' % (c, CU_VIRGULA[c]) for c in lipsa_virgula))
        if lipsa_rest:
            print('    fără: ' + ' '.join(
                'U+%04X %s' % (c, RESTUL[c]) for c in lipsa_rest))
        # Sedila NU e o eroare — e utilă ca rezervă dacă un text vechi o conține.
        if are_sedila and not lipsa_virgula:
            print('    (are și sedila turcească, ca rezervă — %d glifuri)'
                  % len(are_sedila))

    print()
    print('VERDICT:', 'PROBLEME' if problema else
          'toate fonturile acoperă româna, cu ș/ț pe virgulă')
    return 1 if problema else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1]))
