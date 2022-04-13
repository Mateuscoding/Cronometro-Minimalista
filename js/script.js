const iniciar = document.querySelector('#iniciar')
const pausa = document.querySelector('#pausa')
const pausaDiv = document.querySelector('#container-pausa')
const retornar = document.querySelector('#retornar')
const zerar = document.querySelector("#zerar")
/////
const progressSg = document.getElementById('back-segundos')
const segundos = document.querySelector('#segundos')

const progressMnt = document.querySelector('#back-minutos')
const minutos = document.querySelector('#minutos')

const progressHr = document.querySelector('#back-horas')
const horas = document.querySelector('#horas')

// CIRCULAR PROGRESS
var pause = false
var sg 
var mnt
var hr
var retorno = 0

function verificar(){

    if(pausa.classList == 'ativado'){
        clearInterval(sg)
        clearInterval(mnt)
        clearInterval(hr)
    }else{
        return true
    }
}

function zerarTime(){
    retorno = 0;
    segundos.innerHTML = '00'
    minutos.innerHTML = '00'
    horas.innerHTML = '00'

    pausa.classList.remove('ativado')
    pausaDiv.style.display = 'flex'
    retornar.style.display = 'none'    

    progressSg.style.background ='white'
    progressMnt.style.background ='white'
    progressHr.style.background ='white'
    // retorno = 1
}

function pausar(){

    pausa.classList.toggle('ativado')
    pausaDiv.style.display = 'none'
    retornar.style.display = 'flex'

    retorno = 1
    verificar()
}

function continuar(){

    pausa.classList.toggle('ativado')
    pausaDiv.style.display = 'flex'
    retornar.style.display = 'none'    
    // retorno = 1
    verificar()
    temporizador()
}


function temporizador(){
            iniciar.classList.toggle('ativado')
            pausa.classList.remove('ativado')

            
            if(retorno == 0){

                let segundoAtual = 0; 
                let segundoFinal = 60;
                let minutoAtual = 0
                let horaAtual = 0

                sg = setInterval(()=> {

                    segundoAtual++

                    localStorage.setItem("sgnd", segundoAtual)

                    if(segundoAtual < 10){
                        segundos.textContent = `0${segundoAtual}`;
                        progressSg.style.background = `conic-gradient(
                            #576574 ${segundoAtual * 6}deg,
                            white ${segundoAtual * 6}deg
                        )`;
                    }else{
                    segundos.textContent = `${segundoAtual}`;
                    progressSg.style.background = `conic-gradient(
                        #576574 ${segundoAtual * 6}deg,
                        white ${segundoAtual * 6}deg
                    )`;
                }


                    if(segundoAtual == segundoFinal){
                        segundoAtual = 0
                        segundos.textContent = `0${segundoAtual}`;

                      // atualizar minuto
                            minutoAtual++
                            if(minutoAtual < 10){
                                            minutos.textContent = `0${minutoAtual}`;
                                            progressMnt.style.background = `conic-gradient(
                                                #576574 ${minutoAtual * 6}deg,
                                                white ${minutoAtual * 6}deg
                                            )`;
                            }else{                    
                                        minutos.textContent = `${minutoAtual}`;
                                        progressMnt.style.background = `conic-gradient(
                                            #576574 ${minutoAtual * 6}deg,
                                            white ${minutoAtual * 6}deg
                                        )`;
                                        }            
                        localStorage.setItem("mnt", minutoAtual)

                        // atualizar hora
                        if(minutoAtual == 60){
                            minutoAtual = 0;
                            horaAtual++;
                            horas.textContent = `0${horaAtual}`;
                            progressHr.style.background = `conic-gradient(
                                #576574 ${horaAtual * 30}deg,
                                white ${horaAtual * 30}deg
                            )`;
                        }else{                    
                        horaAtual.textContent = horaAtual
                        progressHr.style.background = `conic-gradient(
                            #576574 ${horaAtual * 30}deg,
                            white ${horaAtual * 30}deg
                        )`;
                        }      
                    }
                    localStorage.setItem("hr", horaAtual)

                    
                    iniciar.setAttribute('disabled')


                }, 1000)

    
        }else{

            
            let segundoAtual = parseInt(localStorage.getItem('sgnd'))
            let segundoFinal = 60;
            let progressoSpeed = 100;

            let minutoAtual = parseInt(localStorage.getItem('mnt'));
            let minutoFinal = 60;

            let horaAtual = parseInt(localStorage.getItem('hr'));



            sg = setInterval(()=> {

                segundoAtual++


                if(segundoAtual < 10){
                    segundos.textContent = `0${segundoAtual}`;
                    progressSg.style.background = `conic-gradient(
                        #576574 ${segundoAtual * 6}deg,
                        white ${segundoAtual * 6}deg
                    )`;
                }else{
                segundos.textContent = `${segundoAtual}`;
                progressSg.style.background = `conic-gradient(
                    #576574 ${segundoAtual * 6}deg,
                    white ${segundoAtual * 6}deg
                )`;
            }

            localStorage.setItem("sgnd", segundoAtual)


                if(segundoAtual == segundoFinal){
                    segundoAtual = 0
                    segundos.textContent = `0${segundoAtual}`;

                    // atualizar minutos
                        minutoAtual++
                        if(minutoAtual < 10){
                                        minutos.textContent = `0${minutoAtual}`;
                                        progressMnt.style.background = `conic-gradient(
                                            #576574 ${minutoAtual * 6}deg,
                                            white ${minutoAtual * 6}deg
                                        )`;
                        }else{                    
                                    minutos.textContent = `${minutoAtual}`;
                                    progressMnt.style.background = `conic-gradient(
                                        #576574 ${minutoAtual * 6}deg,
                                        white ${minutoAtual * 6}deg
                                    )`;
                                    }            


                    localStorage.setItem("mnt", minutoAtual)


                    if(minutoAtual == 60){
                        minutos.textContent = `00`;
                        minutoAtual = 0;
                        horaAtual++;
                        
                        if(horaAtual < 10){
                            horas.textContent = `0${horaAtual}`;
                            progressHr.style.background = `conic-gradient(
                            #576574 ${horaAtual * 30}deg,
                            white ${horaAtual * 30}deg
                            )`;
                        }else{                    
                            horaAtual.textContent = horaAtual
                            progressHr.style.background = `conic-gradient(
                            #576574 ${horaAtual * 30}deg,
                            white ${horaAtual * 30}deg)`
                        }   
                    }  
                }
                localStorage.setItem("hr", horaAtual)


            }, 1000)


    }
}