insertButton()

//Inserta un boton en la barra de Google
function insertButton(){
    document.getElementById('hdtb-msb').appendChild(copyButton())
    makeAPopup()
}
//Copia un boton de la barra de Google para que sea con el mismo estilo
function copyButton(){
    button = document.getElementById('hdtb-tls').cloneNode()
    button.onclick = () => {openOrClosePopup()}
    button.textContent = 'Mashup Results'
    return button
}
//Toma del buscador la palabra buscada
function findWordSearched(){
    return document.getElementsByName('q')[0].value
}
//Cierra un popup
function closePopup(popup){
    popup.style.display = 'none'
}
//Abre un popup
function openPopup(popup){
    popup.style.display = 'initial'
}
//Crea un popup
function makeAPopup(){
    popup = (document.getElementsByClassName('cF4V5c')[1]).cloneNode()
    addItemsForPopup(popup)
    document.getElementById('lb').appendChild(initializePopup(popup))
}
//Determina si ocultar o mostrar el popup
function openOrClosePopup(){
    if (document.getElementById('myPopup').style.display == 'none') openPopup(document.getElementById('myPopup'))
    else closePopup(document.getElementById('myPopup'))
}
//Inserta botón con la posición en Bing
function insertBingButton(element,position){
    console.log(position)
    element.insertAdjacentHTML('beforeend', '<img src="data:image/png;base64,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" id="external-flamingo" width="30" height="30" crossorigin="anonymous"><a>'+position+'</a>')
}
//Inserta botón con la posición en DuckDuck
function insertDuckDuckButton(element,position){
    element.insertAdjacentHTML('beforeend', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAC3CAMAAABnsD+tAAABUFBMVEX/////PADl5eXz8/Pk5OTo6Oju7u77+/vj4+P39/fn5+fr6+v/yyiLw0r/NwD/MgBonzf/AAD/JgD/GAAId73/0Cn/9vP/2NL/SS//TDT/oJKIwkT/SCP/zcX/sqb/39kAcbvr8+Ocymv/V0f/UzP/7On/vLD/cmH/qqN+tkP/kIX/WU//YE3/PxH/opwAa7j/uSTzubH2g3nt/f//gmz9ZV77d13/xL7/fnf+ZEP+aE3t4Nz/emnwyMP/PCL/xwD/WQ17qlTD1elelMmNqtTa5fBFiMT/ryP/chb/2Sv/jBz/gRj/myDzTRaAzE7IjDOduEblZSKau9uux+BvoMz/9OL/7M7/y2j/6sD/5qz+3ZT/1nj/zl3/y0T+zLDAkjWnr0GwqD+s0YfW6Md8vSfM4rTebyShw46ip2mdfyW92qHuXBxYmgPsqYqRtnDWfi0aWiMOAAAY90lEQVR4nNVd+3/btrWn+RAlKiYqMKYeMaUk1muMpbqWHDm25HpOHOfhpm2S9nZbe7u1Xe+9We/d///bBYgHQRIgKTmbN3w2VrEE4suD88LB4YGmaZqlWza6OlV0reh6DV0dE10N3TTQ1dErmlYzo6vjWJpm63rd1mzU4dY6O1rcWxd661FvM+qtR/2qpLeOemtm1NsRh/7ndtYxbrvuoH9odcfBvR0remoH93ac6Kkd8rz4ajl1DQ9aiZ5av7XOlmZZ9ZptVyzLtu06/eyQvxi2bbBrxbZr5OpYdXSt46vt3FpnTdfxw9ZNM5o2/LAVsxpddfzIVTxhdKp0E13tKp4w2zLxtFVvrTOmN6J89NRa3UJTFT016o2el0yYja5WNFUWniT81Bp5as25rc7oX2hi6hU8PfW6eMWTxK54klLXml1DP7q9zhHJTUGqTSLV1Uiqq5FUm5FUm4JUm5GM6NVb66wLuM2odxXroUo16keuptBbN7EGqpqRNjKrt9ZZF/hbk3EZluqIv0Qu0wiXaQKL/pM7I+nAUm3XdUGqo6lCZsBgBoCarMgMMKnWuUq4lc5atRppoyqeNqeqk6lKTVitWq2wq406YBarOrfaWeNKv06UPrJakQHA8uxEV8uJlL5DDEBkMaLPqMOtdbYy/klCqk2FVOuCSlB1JrPtbNa5aOSI5HWHeGW6zfyDiqMLQ0f+ge4IXplDvDJT2tmoV2aRKkM/Ip9tIl1lOpcc2dEqlUqtVuNXo1Yzcq+1VIfEFc3haW/1WXc6DcPDw8MQtel0PAx6g9rMKOi83sjcP4mkw8x6CUQ6oqkyc12Myuy02Z0f7e21Ji6AEOAGo/9NWnv7R/NxgH6qSzpvNDK+E9FGduzdRAbAdLg2Msysd0NVmRWpYMf2g3AXY3VR20o3/Ef8FLvhAjNMovOGI2sp+udMEvmcmeGZMeiNT7wGzOLN4Ieed9LtnSJ2yt5ovZGz/onJJ4xaWz1WoTUnsraii+GspksXgkLMrAEPjKaBPZP4J2uMHPknTmQAnGrCS4h7C6q/plOLEfVGFsPvjlprgKbQYWvZPZ3dZGRTrk+k01ZLSbWt+fMzxNEyhhCb7HsAzubWzNhwZKxPHCLV1AxkpJp4CcwlE6TD0pvzRobSLlYgk1a7vfdo/9Ej9P+9drs1wUolAx80Hq/8TUYmcmmaKi/BVHgJkR6yVnMI05gh7I+Ow84waPZ830fKAl17zWDYCY9HfaQaU9ghPA7sirneyIhJBH1iRAKrUvoV8tngn2fNw0kStQsbu/PxojnwNVnzB83FeL6bVjpwcti01xg5hrqRPqmEZ0naIdAdFeQE+A6CnpyjVohH20ifJKMvTlH0xR56MDH0WbszKIAct0GnnXxo6A3rTrmRNTuO+xhrtlpzKaIGcD8MSoMmLQj3E7oTLle1dWFouil6CSrpIF4CnrBpG4qoR93emqhx63VHInLYntatwpGZXJpZfVKE2xgcC3PsNp4syjNIsg0WTxrCncAS26FyuIk+WYtHVu2YSi7sKxjEtge9YNjFDbuwti3/WdAXtAtoBWvxCr6BFVnbRDRAlGqTSrXhdz0Qo94fZqEgbT0MTyaNhud5EDf030ZjchIOkUbP/ny4HyN3valpK0YW4hDEzkeOM0JcBnf9NGzEHLk7zXBIbzFd7iK8GdOIDJLn7S6ni4woDKa7sbR44aAYN9GDpl6aT2q9UTwEXDbTCMbHe24WcgK8u3c8Tj+tqJ3gqFeaV+L4iZ0bxTB6fc4jwBumWLZ5onCw0thB6yT1xMgaxDfur2xp/MTJxk/EODJdLVWzq6X6iustF/QTrGoPxtBbx/+G40Hisf0+f2TXa5Zdp3GLz60/cQ4SToMRcAECZ53EqM3OxCumdILq3qSTILrdOeNEgYGdszqOoUZymdUn1YR0GMEuhz1ZJGQxbJVYn2WQw1aYkNHFhAOffGbL5bKa1SfZ6IspRl/qwS67LdxKCFbYLsHVUuSgHSbEeouJpzsJcuI+VZ35VdnVaXrJYaxiJhmJrL0424DWMc3PxJnzRzGrNO3sYiezLjaLoou1Xgw7FGD3whugJgBFZvEPOXCvOUutG8xsXFOpT6pEquuxAvSmAuzhHlQBKt3gnmBz/anHgPd7pfRJ3urUOOUT2JjGisQP3XVX8bIGXGEG7Smzx2A0kGiV5LpYLpdknxlJhx8ysnpTgUf2b05s0uC+wCuc4jA042CuaabXDVZifyerTxDDdDkNBGoH4GMQm94Xxl6lPeUs2aml9Ynon0j1iTA9xopRABzGEzq8oUAmmwtjJvdDDjyYSdbIgj5xnCi6GIWgLSEEXcFb5APmb0NBAY431NlK4GAsqEPKgG7rFO9O8eB3JQp+R3LpRJuXLO4j3W0+prDBVgx7yqmNw5TYvybutjQwVQ44jEXH32JDLuvCPnfWr6J5BQ7ZbrHIZ7rdwtgNTGIrGTvhbr8bLKLlgD9oDjtHe6V8QmlrxMZzwEw+mNbwRg/JK3AyeQVaOrpY5Sq82SYwXMGyTeO1g9sPA9HqD4LO8e6GrN+IKb44o6O2V05ORDWtB+PsFZu59KAT83YycgJHYcLN8oNpf03vkDYY83iHydSybqrzZrBQIlbBW7YO2b5lW7YLqktAn2vAYZIRgNc4Sa+NB8OtTXS7C7hWsZmBhsNKhBhvFuN9QLLBFQG2SPzETsRPiFxWmAr0uEwGSS4AT+QL+nCygXp3Yz3u85FZCFyMQ/D9HXn2yowZyli99lLUHikCDFpvuQHJXcAt55ANHarzZnhGRzIRRGue0b5Lhs7fT5LRDTTfV4RfxxtwOdhnN+OS1WpWMiko0V9sts+NmSbB39StdHf5kipMEXFydDzC7fj4sDNsphbqww2AQ64Nm3R9BQ5tkb9tgb81qX9irSakZ2wShhkgLhDa2dmTRJBhkReUUDSXs+SU0AgvfhR5M+ndfWJ69DntuM+w9PaUwubC3UfLcZBimSEyRGtuWYE9xuKDfUq2Y79GTA8xN5bF8gqsyD+pRCl8dZbCZzczQpnmkrjBfriQsvlg0RmthzzmFC6aKyNKHozyZqIUQpJzKM+b0Ri5+/G0q4aC45xI8iAYeYqO8rtxM9anBH88U+XN6ML6kgYhfGrNG1ynnimYtXFSEEn2u+uQ3D1j/QIGwZLnzWgy/2ROhgJPCrjEnUiCsunWVEtGtsWc8oRimM+o6Yn9E13hn/hMd7NZ67Wl5HZ3S22RNCflNYvbZlzHOPPsVJIULM/r7dJHHTEeCOUUayzkQNNtuIb5BIzgA7ogd8ezKKWtMK/XcGgP2GUEa0kJ5nVUQNNtXF443RYzdF3ytGBZMq/XCAhMly217Y6UXnBUtGHJm39cnuKQxU17RIe7rcAulddrUGMVz5iUP93WGjtpvX5pFncnKe6EU7tMXm9lsCS/P2NCJ59ld6oCKWvj8jrFY0uIgKgHMDotk9fr9Chp2mxM6drL3Su5BWhfvH17qWm75QkOWdc2+QN2cAvzek2rS8gLmdQ1peQGoQxktl3e/RS1Z3bQkN1FTnAmmVSuvG6pvN4TMqUNRs996RRDTm7j8u37ZxcVBbXvv7+4rF88fcZuW6KBfdp5QJ4VnFRK5PXSVZK7yzq3ZPd2ORddPL3/9NmzZ+8MObkv6a9mQXmV0mI0ocwFrRJ5vXRCOZvIJYp/ffHp0wscHSUh0iy9+Sd/WZ7gTDIZoyz0wrzeCnVFGozJjqXDNagSrNx9r1plplu3NMHBMe3SpDQMtcK83hmZG3eXzlVvT24rqc15974kasRwR2UJ7rL1w4CBKc7rPaVGZ06BLeQeFdvDfKeQR1lTeDmy21PHx6eOKbSL8nprTfpLxmJT6eyCOeWOWlku0bgdKdH4qpbGx0BQlNdrU1+QubAKaYKlXSqxtcviBks22xR3d1aQ12uTmXH7VCx7cjsnhPNKtNoFYSf1GjXV3F3K4E3i16DFQ0Feb+2I/JC53nJjGbu4ZdolMpjP32EilLaZzGRSJ9w9SicC4y9F/+SUqA9wTCdqWA735bu37+QKHFv6u/efaRcYeGk33KPrP59oYXd/YOXn9VK1x5d5iqlN8cnb5/cRSS/kuN/ev3v/6eziucbXjMUtNT5SjFZuXq+xImsGHvJWeBVJuby4i6C9v3gv14nP7t9F7f5zg9u/4gZOaGcSDMdrh9y83vpnk6gfW6fbiiUtDAX9Zz9FyD6taM/equiNcT9FH4OyjOJO6P2HMZ68vN5Kl+Bs0TWDrZAksBRwXz5HuD599u75U6lvVXn6KYJ9H3PRoLRgNuj9A+LVYY8lL693Rrai3DaTZxXuJ8LaMsJ99/6n95/KGeXy/X3kfEW3K+2iMC+a7jGB6Sw/r5eYRx7F6KkmFgq4Iz6JSK5QKbXLSzITg7Q1wJluULb77DEABDecVvLzepn8UlhKhmyIq7R3hIPvKhRK3AZPhBxNvOH5+urg4Or6xSSz+elRRvWpXg4tJzevl/g+7qN89R0rWNLePmempQA3W9a7AJyfv77aIe3lnetzIL+//4jirqTy8BJ5vbp5SPU8xa30mWFyeXn57t27y0LYFDeA4Pz19dWdnZ07rL08SCkuZtj8fW5PcvJ69SrF/cguwM2XcWu1AXCBB15cHxyIoHHbOZfjthm97dy83jrDrRXg3oIKaPm4G+evDxDiJGYM+zo1EHckKO5DPzev1w5L414z79v/5ptvv/2Pg5c7GcwI9Z1XaTlK0/uwqufm9VJ9UsjfW6BE5BuP+8133333hz/84Y9/+v6Hzz//XAIaob4+zwyT4m9waOq5eb2U3ntF+gS5xGWI/Mfvf/jhzp3PoyaBjFG/vD7fyirwjD7Jzet16gw3Vc9qh8I9Kob9RzlUEfXOlQx1Rn8TfaLO661Qe8lwK+1lcXzQ/k5FYo75zsErqEj8yNjL/Lxe7p+wQIDSESraI/nmT0WoD65fuMp0lax/kp/XS6NTRf7glhBUkrZvv8+DjUh99fo8Lysu5Q+63Up+Xu8w5X+rN6thXkD2mztq2MiuH7w+n+Rug7sg5X9/Vs/N67XpHgknpjqKGu9ayWAnge4In+8cvJ4U7t1n1jsrIzev1yq5vtyiWayKluDtg6urqwOK/uDq1blXIgcru77Mz+u1BkzPFzkoOIikJPf3Amzk6oHJ+YsXr1+9ev3iHJRLHPOYuaR+x95pQV5vOn6Ss03gKWMoAu6dKyx9Lkv5KLtZko2fFOT1ztLxKvVeLwxV+4B+zCc7LzZJpXUn6XiVXZDXa1BFCBaJB5a1xBoz2WJDubPGHrdw60x80C7K6w0ITs4E8nhs1KBSoXwb404vZEo1Ho+le2QgyMTZ0nm9NsEJDws9wnjfK9s4o+xc5Qg2RFYeyL5nzqZ/SNGcFuf10hB/P2lopVTJCSbHivBaln+CX1mD56+u0PevJHUZ+H5Dn+43zArzepnGZhs4tno7KU5PybZBLJkHLyZbpHAErRPhbiG9eH3wkqwhXkpuzPZ3emx/p1KY16svUtuuHTWDNtS4te9+YFYSmfVrpLlpQ4r8+upgh697dq4kuFP7aY2gRF6vRUWBpVb11LsbjTxX9j+v77xk2CJTSVr0L8HuH5xn+YTvX9JMWc8vkddbYfvFTMupUxm8vLyZLkBr4JeiZ5IATKfiWqInOf/5bL+4VF4v1T1cE+as1Q5zcE+xrpi8upOOOAiod64mMm3C1joxEssskdfbo/lBPAcvZ82Tixv/AsLz11cHd7KURn4hWg7LN4/YLWhCmdtzyuT1sjeNzpi/p/YJ2zkMzgwWovr5i1fXV4jbI/QksHb16sVEtURjGoFKFlgOKmXyem2W78P7K3Gf5azVBEOLlJ97TsCjdnD96gVaNqh8LNdl9OqwrVSjVF4vXzuw3FhmtSRj5KzVUg4C0tzulht92HLz/EK+lUH3xfGaoWReLzU1gElmoBojTzC7m71TFSdu82xAXDusTF7vjE0Q2wxk2+RZ3Et1SttidyPcPI+I5cAh6pXN6z2lpgawR1ftrLtP1Gs1RSJFQYuz5GiiwFbLL53XO2NpCDyWploeu2rLw1K412tx2tacJWaskddrsWRg9vC+QjK9HMEsn98j0IHnI7OIU8Ovls7r1WaP6cOO2G06iv1u5Vot1yFTtthzGPEplxX7VdTrNVYs3Z0p6PTLJLSBnPTvYH3ckKW1aDzhv2mvU6+XC/MRo+dCjgLkhO/XfokH8CRqxmRwrq9XrzegflocBZQvNL0ci/k49ajyGlwibr4XQHW3O1lZiveOFPV6acBFeMXDl67s89ZqyeC5637x9Re5wOOI44ByJTi01qzXW2m20jfrycgFHqtx+wJuF/7txz+/+Use64A9LuMsb+Ksqa1br9cO06KpLWSxK+50Sva4Y00Itr786s329vbf8gqkcObmQhnO0vU1S9Tr9RilOI6pRBnStZr90/a9n35OJbcxRnHB119tR+3LnJeXYklhE+tV4ve5S9frrbC3EmIlHtdCiBvdQHrw8N72vV9++fBAJDvdjgdf/PiGwL73o9KzFPbn2DQhZW6sX6/XrLO38iZcp0iibtQXwLgxsF9++uuDGPjUQ06r++tXFPb2vb+oyC0kPg2FNxE3qdfrsLdf4lclEAXTwGliMsWNoN17+CFC/uDnn//rv//nVzj5cZt+hXErwoXC+8U9+u57lAOzUb3eGX+fO66M42eiT2d+AjdGvv1B++vvPyFt8hX/ArWv5IIpvM/NDTOY1jat11tnnAbjV4z9fgr4JEjhxtB/+43C/uTN9nYRblfMjuMvYx9vXq/XOmUv7sBDDnyQ8mndThb37z7h7XeFuF0wjvUQe88doCX35vV6Z9zkCSUFBqOEUiDBvLK4v84INoCCD8+jv3Bl3KReb42rbBDvivhz0QAR10uJ+5MC3NAVotELJraNce2G9Xrj+ifCds5YCH2QoG9J3Nu/pnDDI8ER5u+5I7f+hvV67VhlN4TMjaAf80q0R2v/tAm9waQjrDsCVtkPjE6NG9frjV/R8gT56R3zF7YjbaDGfS+JW5RLuC8uTxeM2qDfq9+8Xm9txRGKNWf8LuDeD6aZCvfvH74RVKGoTwBMlOUcMt52vV7tY9TrtZucmwV1iN/X84S9zg9S3L/99kD73x858nt/5h64C5MJFVxkXKRKPlK93oBbZ7grroOHUbkwd9JM4sam/vdR+7+f8fO14d//vL395l5k5ymtQTuxa+sf8zpCu0H9Y9XrtT8TgItUGnTaiEzRWu2vMeyHH2qRvLO56UAAv/jyL19tv3lD/Fjg7SfLLvb4W9/uJDA+Wr1ewxbr4U1FL7vZgTAKovzMUG9/eKClWhTKnPzt17//HbMJ8PqpIqgL/ua0CxdGqhbRzer1NrlwujzHImp2r9PAL74+eIhR/3Lvw4PsmzGkmBTZSgONfroIasjL+AFvVf+49XrtlVjvcZHA5g8x0z+8h9oHaUYy9cVw9ez2PB24GMQlNpECND52vV6xvqYL59mt4p8f/vRB9RLSAu/1wN2jMBNOHIzjbKW16muWr9c7COPlJWxlSyLnvDqFjO5J2A2ysa3FKPYYGuFp/R9Rr9c2p3FRExfI6seqgfdk1aoHh3FFHQDHvvGPqtcbtGL3woV76ryCMs0PhYQ20F6vtjO+Qcl6veg6O10m6iM/lkx9ydbreOLG1fHAyB1583q90dWqf5R61FrQEQr1YmkpHHnTer2cV1Y3rv/td5N1xbxlc10Upev1xlVznfqN6q1rzXkrsQ8IsTUoNfIG9XrF1RK6hq1MffuuVGOkCD0I5jBxeAJ66LBSeuS16/Wmq+basvMEkIZeyKplE8i9YDGeu8mq/NF5AjM+WpmR16rXm/HezYodHKfPb8CpR3vLw3C8aDL0+PyGIFgMO+FybytTYRvC+QrTbp2R16nXK6+a668eK87LOGs/Ym3/Ubt1tosPzMjETUBj3tStTUYuWa9XtTo1Ztb8TLrV7pY4n6Q19zV7w5FL1evNq5o7Ox0vNzoPZtT11zmHbIN6vQXnNM3sYDoCa9X/dpfTIOLVm4y8xjk2inOxbPu01z3xymRHI6WDzzsaGLIzstYbWSGXvF5vbtXc+Ai0irUodb5U4Nskt8FSnp9WauSier0ZqU5k14pHLeHjWoPx/Gh/rzVhB3lhrEiTTFp7e0fzbvMUZ10WnSNZbuSCer3yk2WUp6AZxqyGj5wY4/PT6Alq02n3s1XvtKbJzsLafOT8er304Dhl1Vwz2znSyLNK3dBsP1oARJ9Ldi4/cn69Xh59yTsKUtpZGHr9ziVGzqvXGx+MqKqa69xa54jkinq9Jc4hu83Om582faOjqm94zrWqXi8ueMYOWo36SarmYrN7O51z6vWacTRAWTW3emud/23PuVbU6y06uJlk195eZ1W9XqR/bXqaeprLbIFFb6uzLK833uf+Vz7nWl6vN3sEvKxqbuYo339aZ0W93thLiK41lsKXzq7Vb63zv+0519Qf1AWvLDJZFZ3sc+uZ3o4w9K11/n/cqG2hwkHPQgAAAABJRU5ErkJggg==" id="external-flamingo" width="30" height="30" crossorigin="anonymous"><a>'+position+'</a>')
}

//Inserta botones con la posición en los buscadores Bing y DuckDuck
function insertSearchersButtons(duck,bing,element){
    insertBingButton(element,position(bing,element.children[0].href))
    insertDuckDuckButton(element,position(duck,element.children[0].href))
}
//Transforma una coleccion de elementos html a arreglo
function transformHTMLCollectionToArray(htmlCollection){
    return Array.from(htmlCollection)
}

//A cada resultado obtenido en la búsqueda le pone un botón con su ubicación en DuckDuck y en Bing
function insertButtonsForAllResults(duck,bing){
    transformHTMLCollectionToArray(document.getElementsByClassName('r')).forEach((element)=> insertSearchersButtons(bing,duck,element))
}

//Setea los valores del popup a crear
function initializePopup(popup){
    popup.id = 'myPopup'
    popup.style.left = '864.898px'
    popup.style.top = '1119.5px'
    popup.style.display = 'none'
    popup.role = 'menu'
    popup.tabIndex = '-1'
    return popup
}

// Copia un item de la lista 
function copyItemFromAList(url,position,searcher){
    item = document.getElementsByClassName('f9UGee')[0].cloneNode()
    item.innerText = fromAPositionToText(position) + searcher
    item.href = url
    return item

}
//Agrega una lista de items al Popup
function addItemsForPopup(popup){
    chrome.runtime.sendMessage({
        subject: 'query',
        data:findWordSearched()},(response)=>{
        addItemsForBing(response.respuestaBing,popup)
        addItemsForDuckDuck(response.respuestaDuck,popup)
        insertButtonsForAllResults(response.respuestaDuck,response.respuestaBing)
    })
}
//Agrega los resultados de buscar en bing
function addItemsForBing(resultadosDeBing,popup){
    resultadosDeBing.forEach((element)=> popup.appendChild(copyItemFromAList(element.urlTarget,resultadosDeBing.indexOf(element),'Bing'))
    )

}
//Agrega los resultados de buscar en duck duck
function addItemsForDuckDuck(resultadosDeDuckDuck,popup){
    resultadosDeDuckDuck.forEach((element)=> popup.appendChild(copyItemFromAList(element.urlTarget,resultadosDeDuckDuck.indexOf(element),'DuckDuckGo')))}

//Recibe un arreglo y devuelve la posición para esa noticia
//El +1 es porque el primer elemento es 0
function position(array,link){
    index = array.indexOf(array.filter(element => element.urlTarget == link)[0])
     if (index == -1)return '-'
     else return index+1
}

//En base a una posición en un arreglo devuelvo la posición ordinal
function fromAPositionToText(position){
    switch (position){
    case 0: return 'Primer resultado de '
    case 1: return 'Segundo resultado de ' 
    case 2: return 'Tercer resultado de '
    case 3: return 'Cuarto resultado de '
    case 4: return 'Quinto resultado de '
    case 5: return 'Sexto resultado de '
    case 6: return 'Septimo resultado de '
    case 7: return 'Octavo resultado de '
    case 8: return 'Noveno resultado de '
    case 9: return 'Decimo resultado de '
    case 10: return 'Onceavo resultado de '
    case 11: return 'Decimo segundo resultado de '
    }
}