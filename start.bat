@echo off
echo Starting LOFI Bot..
call npm start

if NOT ["%errorlevel%"]==["0"] (
  	pause
  	exit /b %errorlevel%
)
