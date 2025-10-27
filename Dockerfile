# Use Node image with Java and Android SDK support
FROM node:20-bullseye

# Ensure dev dependencies are installed
ENV NODE_ENV=development

# Install Java and Android SDK
RUN apt-get update && apt-get install -y openjdk-17-jdk wget unzip && rm -rf /var/lib/apt/lists/*

# Set Android SDK environment variables
ENV ANDROID_HOME=/usr/local/android-sdk
ENV PATH=$PATH:${ANDROID_HOME}/cmdline-tools/latest/bin:${ANDROID_HOME}/platform-tools:${ANDROID_HOME}/emulator

# Install Android command-line tools
RUN mkdir -p ${ANDROID_HOME}/cmdline-tools && cd ${ANDROID_HOME}/cmdline-tools \
    && wget https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip -O tools.zip \
    && unzip tools.zip -d . \
    && rm tools.zip \
    && mv cmdline-tools latest

# Accept all licenses
RUN yes | ${ANDROID_HOME}/cmdline-tools/latest/bin/sdkmanager --sdk_root=${ANDROID_HOME} --licenses || true

# Install required SDK packages
RUN ${ANDROID_HOME}/cmdline-tools/latest/bin/sdkmanager --sdk_root=${ANDROID_HOME} --install \
    "platform-tools" \
    "platforms;android-34" \
    "build-tools;34.0.0"

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all source code
COPY . .

# ✅ Validate CLI presence (fix: use -v instead of --version)
RUN npx react-native -v

# Expose Metro bundler port
EXPOSE 8081

# Default command: start Metro server
CMD ["npx", "react-native", "start"]
