# 360 Kids Mobile

React Native + Expo + TypeScript starter using the official blank TypeScript template dependency versions.

## Status

A development welcome screen is implemented. Navigation, authentication, bookings, notifications and API integration are not implemented. This is not an App Store or Play Store release. No customer data is collected.

## Windows / PowerShell setup

Use Node.js 24 (tested with 24.22.1):

```powershell
npm ci
Copy-Item .env.example .env
npm start
```

For a physical phone, set EXPO_PUBLIC_API_URL to your computer's LAN address rather than localhost when API integration begins. Use an Expo Go version compatible with the installed SDK, or an Expo development build. SDK support must be checked on your device.

```powershell
npm run typecheck
npx expo install --check
npm run export
```

The export command validates JavaScript bundling for Android; it is not a native APK build or a real-device test. Native iOS builds from Windows will use EAS cloud builds, then EAS Submit/TestFlight once client-owned accounts, bundle identifiers and signing are configured. Local `npm run ios` requires macOS/Xcode; use the cloud workflow on Windows. EAS project/account configuration is deliberately not invented here.

## Shared backend

- API, SQL and integration contracts: https://github.com/naseef786/360kids-backend
- Website and dashboards: https://github.com/naseef786/360kids-web

All business permissions, booking transitions, payments and WhatsApp delivery live in the backend. Never embed server credentials in this app. Future client types should be generated from the backend's versioned contract.

Next steps: Expo Router navigation, auth, family catalog and booking journey. WhatsApp communication preferences will connect to backend permissions; this app will not import contact databases or directly send campaign messages.

EXPO_TEMPLATE_LICENSE.txt preserves the upstream template attribution.

## Dependency audit — 10 November 2026

Targeted minimatch/glob overrides address dependency advisories without changing the Expo SDK. TypeScript, clean Android JavaScript export and npm audit checks pass locally. The online SDK metadata request timed out; the offline check has reduced assurance. See `docs/DEPENDENCY_AUDIT.md`. This is still a starter, not a functional mobile booking app.
