@echo off
title CloutCraft Redesign - Dependency Installer
echo ===================================================
echo   CloutCraft Media Redesign - Installing Dependencies
echo ===================================================
echo.
SET "PATH=C:\Users\HERAMBH BIRARIS\.gemini\antigravity\scratch\.node;%PATH%"
call npm.cmd install
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to install dependencies.
    echo.
) else (
    echo.
    echo [SUCCESS] Dependencies installed successfully!
    echo Now run run_dev.bat to launch the dev server.
    echo.
)
pause
