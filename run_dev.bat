@echo off
title CloutCraft Media Redesign Dev Server
echo ===================================================
echo   CloutCraft Media Redesign — Local Server
echo ===================================================
echo.
SET "PATH=C:\Users\HERAMBH BIRARIS\.gemini\antigravity\scratch\.node;%PATH%"
call npm.cmd run dev
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Server failed. Make sure to run install_deps.bat first.
    echo.
)
pause
