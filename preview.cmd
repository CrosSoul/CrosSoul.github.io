@echo off
setlocal
cd /d "%~dp0"
where python >nul 2>nul
if errorlevel 1 goto use_py
python "%~dp0scripts\preview.py"
goto done
:use_py
py -3 "%~dp0scripts\preview.py"
:done
if errorlevel 1 pause
