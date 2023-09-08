{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const calculateTemp = () => \{\
    const inputTemp = document.getElementById('temp').value;\
\
    const tempSelected = document.getElementById('temp_diff');\
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;\
\
    // Celsius to Fahrenheit\
    const celToFah = (cel) => \{\
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);\
        return fahrenheit;\
    \}\
\
    // Fahrenheit to Celsius\
    const fahToCel = (fah) => \{\
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);\
        return celsius;\
    \}\
\
    if (valueTemp == 'cel') \{\
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";\
    \}\
    else \{\
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";\
    \}\
\}\
}