# Dependency audit — 10 November 2026

The existing Expo SDK and React Native versions are retained. Targeted overrides resolve minimatch >=7 <11.0.1 to 11.0.5 and glob >=9 <14.0.2 to 14.0.2, addressing GHSA-g3hv-75wg-m249 and GHSA-3g3m-2fjr-6pw4. Legacy unaffected major versions are not overridden.

These are transitive major overrides, verified on the repository’s Node 24 runtime with TypeScript, a clean Android JavaScript export and zero reported npm audit vulnerabilities. They are not a native-device certification. Remove overrides after upstream Expo tooling adopts patched ranges, then repeat validation. Do not force an Expo SDK downgrade as an audit workaround.

Local online Expo dependency validation timed out at the proxy. The offline SDK metadata check found no mismatch but explicitly reports reduced reliability. CI retains the online dependency check and adds npm audit.

The application remains a welcome-screen starter; no navigation, Auth, booking, messaging, customer data or store release is added by this security fix.

References: https://github.com/advisories/GHSA-g3hv-75wg-m249 and https://github.com/advisories/GHSA-3g3m-2fjr-6pw4.
