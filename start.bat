@echo off
echo Starting LOFI Bot..
echo.
call npm start

if NOT ["%errorlevel%"]==["0"] (
  	pause
  	exit /b %errorlevel%
)
