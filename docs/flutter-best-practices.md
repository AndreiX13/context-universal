# Flutter Best Practices

A curated distillation of the Flutter package ecosystem — not a link dump. It
condenses the widely-referenced `awesome-flutter` catalogue plus hands-on
practitioner experience into opinionated, decision-oriented guidance. The goal
is to help you pick the right tool per problem, understand the trade-offs, and
know which corners of the ecosystem generic "awesome" lists do **not** cover.

Every package named here should be re-checked on pub.dev before adoption — see
the "Verify before adopting" note at the end.

---

## State management & architecture

Flutter has no single blessed state solution; the right pick depends on team
size, app complexity, and how much boilerplate you are willing to trade for
predictability. A common mistake is reaching for a heavyweight solution on a
small app, or hand-rolling state on a large one. Match the tool to the scale.

Keep business logic out of widgets. Whatever you choose, aim for a layered
shape — UI → state/notifier → repository → data source — so networking and
persistence stay testable in isolation.

Shortlist, with a one-line "pick this when":

- **Bloc / flutter_bloc** — Event-driven, explicit state transitions, highly
  testable. Pick it for large apps or teams that want a strict, uniform pattern
  and an auditable event log. pub.dev/packages/flutter_bloc
- **Riverpod** — Compile-safe, provider-based, no `BuildContext` needed to read
  state, easy to test and compose. Pick it for new projects that want modern
  ergonomics without Bloc's ceremony. pub.dev/packages/flutter_riverpod
- **Provider** — A thin, well-understood wrapper over `InheritedWidget`. Pick it
  for small-to-medium apps or when you want the lowest learning curve and
  broadest tutorial coverage. pub.dev/packages/provider
- **GetIt (get_it)** — A service locator for dependency injection, not a reactive
  state manager. Pick it to wire up singletons/repositories and inject them into
  your notifiers/blocs; pairs with any of the above. pub.dev/packages/get_it
- **State management for minimalists (InheritedWidget)** — For simple apps you
  often need no package at all. `ValueNotifier` + `ValueListenableBuilder`,
  `ChangeNotifier`, and raw `InheritedWidget` cover a surprising amount of
  ground with zero dependencies. Pick this when state is local and shallow, and
  reach for a library only once prop-drilling or cross-screen sharing starts to
  hurt.

Rule of thumb: start minimal, and adopt Bloc or Riverpod when shared,
cross-screen, or asynchronous state becomes the dominant source of bugs.

---

## Location / tracking app package cheat-sheet

This section serves GPS / geofence / pet-and-people tracking apps (e.g. the
Safe Life project). It maps the common needs of a location app to concrete
packages.

> **WARNING — read this first.** The genuinely hard part of a tracking app is
> **reliable background location and geofencing** and the **foreground-service**
> plumbing that keeps it alive. These are exactly the packages that generic
> "awesome" lists do NOT vet or even list, and behaviour differs sharply per
> platform (Android battery-optimisation / Doze, iOS background-location limits
> and App Store review, OEM-specific process killing). Evaluate every
> background/geofence package **separately, per platform**, against your own
> field testing — do not assume a green pub.dev score means it survives a
> locked, backgrounded phone.

| Package | What it is for | pub.dev |
|---|---|---|
| `geolocator` | Current position, last known position, distance/bearing math, foreground position streams | pub.dev/packages/geolocator |
| `permission_handler` | Request and inspect runtime permissions (location, "always" vs "while in use", notifications, Bluetooth) | pub.dev/packages/permission_handler |
| `flutter_map` | Interactive map widget with OpenStreetMap / custom tile layers, markers, polylines (no Google billing) | pub.dev/packages/flutter_map |
| `flutter_background_geolocation` | Battery-efficient **background** location + geofencing, motion detection, persistence. **NOT in awesome-flutter — source and license separately** (paid license for Android release builds) | pub.dev/packages/flutter_background_geolocation |
| `geofence_service` / `geofencing` | Geofence enter/exit/dwell events backed by a foreground service | pub.dev/packages/geofence_service |
| `flutter_reactive_ble` | BLE central-role comms — talk to trackers, tags, and beacons (pet collars, key fobs) | pub.dev/packages/flutter_reactive_ble |
| `flutter_local_notifications` | Local/scheduled notifications — geofence alerts, "left the zone" pings, background-task output | pub.dev/packages/flutter_local_notifications |
| `live_activities` (iOS) | iOS Live Activities / Dynamic Island — show a live "tracking now" status on the lock screen | pub.dev/packages/live_activities |
| `geoflutterfire_plus` (GeoFlutterFire) | Geohash-based radius/proximity queries against Cloud Firestore ("who is near this point"). The original `geoflutterfire` is discontinued — use the maintained `_plus` fork | pub.dev/packages/geoflutterfire_plus |
| `workmanager` | Deferred/periodic background tasks via Android WorkManager & iOS BGTaskScheduler — periodic sync, not real-time streaming; also the entry point for foreground-service work | pub.dev/packages/workmanager |

Practical sequencing for a tracker: get foreground positioning working first
(`geolocator` + `permission_handler` + a map), then layer in background
tracking and geofencing as a **dedicated, separately-tested workstream** — it is
where most schedule risk lives.

---

## Testing & build flavors

- **Patrol** — Integration testing that can drive **native** UI: system
  permission dialogs, notifications, WebViews, and cross-app flows that
  Flutter's own integration_test cannot reach. Essential for a location app,
  where the permission dialog is part of the flow under test.
  pub.dev/packages/patrol
- **flutter_convenient_test** — Improves the integration-test developer
  experience: hot-restart between tests, richer logging, and better failure
  reporting for faster iteration. pub.dev/packages/convenient_test
- **flutter_flavorizr** — Generates Android/iOS **build flavors** (dev / staging
  / prod) — bundle IDs, app names, icons, and native config — from a single YAML
  block, instead of hand-editing Gradle and Xcode. pub.dev/packages/flutter_flavorizr

Pair these with the SDK's built-in `flutter test` (unit/widget) and
`integration_test`; the packages above extend rather than replace them.

---

## Verify before adopting

Package health changes faster than any curated list. **Before adding any
dependency**, re-check its pub.dev page for:

- Recent maintenance — last publish date, open-issue trend, responsive owner.
- Null-safety and current Dart/Flutter SDK constraints.
- Platform support matrix — confirm it actually supports every platform you ship
  (especially iOS + Android for anything location/background/BLE related).
- Popularity / likes / pub points as a coarse signal, plus a quick read of the
  changelog for breaking changes.
- Licensing — some high-value packages (notably background geolocation) are
  commercial for release builds.

When in doubt, prototype the risky package in a throwaway branch and field-test
on a real, locked device before committing your architecture to it.

---

*Distilled from awesome-flutter (Solido, CC0) + practitioner knowledge.*
