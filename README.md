# Wenex React Native App

This is a **React Native** project for Android, built to run either directly on your machine or inside Docker. Here’s how you can get started easily.  

---

## 1. Using Your Host Machine (Simplest Way)

1. **Install required tools**:  
   - [Node.js 20+](https://nodejs.org/)  
   - [Android Studio + Emulator](https://developer.android.com/studio)  
   - Java 17 (comes with Android Studio)  

2. **Install project dependencies**:

```bash
cd wenex_app
npm install
```

3. **Start the Metro bundler** (JavaScript server):

```bash
npx react-native start
```

4. **Build and launch the app on Android Emulator**:

```bash
npx react-native run-android
```

> Tip: If the app is already running on port 8081, stop it first or use another port.

5. **Fast Refresh**:  
   - Make changes in `App.tsx` or other files, and the app will update automatically in the emulator.  
   - For full reload: press **R** twice in Android emulator.

---

## 2. Using Docker (Optional)

If you prefer isolating everything in a container:

1. **Build the Docker image**:

```bash
docker compose build --no-cache
```

2. **Start the container (Metro will run inside it)**:

```bash
docker compose up
```

3. **Connect your Android Emulator** (host machine) to the Metro server in the container:  
   - Metro runs on port `8081`.  
   - Set environment variables if needed:

```powershell
$env:REACT_NATIVE_PACKAGER_HOSTNAME = "localhost"
$env:RCT_METRO_PORT = "8081"
```

4. **Run the app on the emulator** (still on host):

```bash
npx react-native run-android
```

> Note: Docker is **optional**. For day-to-day development, running directly on your machine is simpler and faster.

---

## 3. Backend API

- If your app fetches data from a backend, set your API URL to:

```ts
const API_URL = "http://localhost:PORT";
```

- Replace `PORT` with your backend’s port (e.g., 8000).  
- If using Docker for the backend, use your **host machine IP** instead of `localhost` inside the app.

---

## 4. Tips

- Stop any process using port 8081 before starting Metro.
- Use Android Emulator or a real device for testing.
- Fast Refresh updates your app immediately when code changes.
- Docker is useful if you want an isolated environment, but not mandatory.

---

## 5. Congratulations 🎉

You are ready to **edit, test, and run** your app!  

- Edit `App.tsx` to start customizing.  
- Enjoy fast refresh while you develop.