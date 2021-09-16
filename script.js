const btnIniciar = document.querySelector('#btn-iniciar');
const body = document.querySelector('body');
const divs = document.getElementsByTagName('div');
const script = document.querySelector('script');
const arrayDeMensagens = ['Really? Como errou essa?', 'Tenta mais uma vez vai!', 'Mas não é possibru!', 'Keep calm, Try Again.', 'Se errar de novo a gente termina. Sem pressão!', 'Marminina... Na próxima você acerta.', 'Rosas são vermelhas, violetas... que? Tu errou? Vai de novo.', 'Do it! Just, do it!', '8============D~~', 'Quer casar com... tu errou? Deixa pra lá...'];
let count = 2;

const message = () => arrayDeMensagens[Math.floor(Math.random() * arrayDeMensagens.length)];

const removePreviousPopout = () => {
  const divMaior = document.getElementById('div-maior');
  if (divMaior) {
    divMaior.remove()
  }
}

const makePopout = () => {
  removePreviousPopout();
  const divMaior = document.createElement('div');
  const divContainer = document.createElement('div');
  const divTexto = document.createElement('div');
  const divX = document.createElement('div');
  divMaior.id = 'div-maior';
  divContainer.id = 'popout-container';
  divTexto.id = 'div-texto';
  divX.id = 'div-x';
  divTexto.innerText = message();
  divX.innerText = 'X'
  body.appendChild(divMaior);
  divMaior.appendChild(divContainer);
  divMaior.appendChild(divX)
  divContainer.appendChild(divTexto);
  divMaior.addEventListener('click', (e) => {
    if (e.target.id === 'div-x' || e.target.id ==='div-maior') {
      divMaior.remove();
      console.log(e.target);
    }
  })
}

const btnRepeat = (newDiv, newH5, string = "") => {
  newDiv.remove();
  newDiv.innerHTML = '';
  body.appendChild(newDiv);
  newH5.innerText = string;
  newDiv.appendChild(newH5);
}

btnIniciar.addEventListener('click', () => {
  for (let i = 0; divs.length; i += 1) {
    divs[i].remove();
  }
  const newH5 = document.createElement('h5')
  const newDiv = document.createElement('div');
  const input = document.createElement('input');
  newH5.id = 'h5-ask';
  newH5.innerText = 'Qual foi o dia que nós começamos a namorar?'
  newDiv.className = 'new-css';
  input.className = 'input-form';
  body.append(newDiv, script);
  newDiv.appendChild(newH5);
  newDiv.appendChild(input);
  input.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
      if (event.target.value === '27/09/2020') {
        newDiv.innerHTML = '';
        const nextBtn = document.createElement('button');
        nextBtn.className = 'next-btn1';
        nextBtn.innerText = 'I Love You';
        const img1Div = document.createElement('div');
        img1Div.id = 'img1-div';
        const newImg1 = document.createElement('img');
        newImg1.className = 'img-ask1';
        newImg1.src = 'imagens/img12.jpeg';
        newDiv.appendChild(img1Div);
        img1Div.appendChild(newImg1);
        newDiv.appendChild(nextBtn);
        nextBtn.addEventListener('click', () => {
          btnRepeat(newDiv, newH5, 'Qual foi o primeiro evento da sua família que eu participei?');
          const input1 = document.createElement('input');
          input1.className = 'input-form'
          newDiv.appendChild(input1);
          input1.addEventListener('keydown', (e) => {
            if (e.code === 'Enter') {
              if (e.target.value.toLowerCase() === 'halloween') {
                newDiv.innerHTML = '';
                const nextBtn1 = document.createElement('button');
                nextBtn1.className = 'next-btn1';
                nextBtn1.innerText = 'Je Vous Aime'
                const img2 = document.createElement('img');
                img1Div.innerHTML = '';
                img2.src = 'imagens/img10.jpeg';
                img2.className = 'img-ask1';
                newDiv.appendChild(img1Div);
                img1Div.appendChild(img2);
                newDiv.appendChild(nextBtn1);
                nextBtn1.addEventListener('click', () => {
                  btnRepeat(newDiv, newH5, 'Onde foi nosso primeiro beijo?');
                  const input2 = document.createElement('input');
                  input2.className = 'input-form'
                  newDiv.appendChild(input2);
                  input2.addEventListener('keydown', (e) => {
                    if (e.code === 'Enter') {
                      if (e.target.value.toLowerCase() === 'casa de ciro') {
                        newDiv.innerHTML = '';
                        const nextBtn2 = document.createElement('button');
                        nextBtn2.className = 'next-btn1';
                        nextBtn2.innerText = 'Ich Liebe Dich'
                        const img3 = document.createElement('img');
                        img1Div.innerHTML = '';
                        img3.src = 'imagens/img1.jpeg';
                        img3.className = 'img-ask1';
                        newDiv.appendChild(img1Div);
                        img1Div.appendChild(img3);
                        newDiv.appendChild(nextBtn2);
                        nextBtn2.addEventListener('click', () => {
                          btnRepeat(newDiv, newH5, 'Qual a nossa comida oficial?');
                          const input2 = document.createElement('input');
                          input2.className = 'input-form'
                          newDiv.appendChild(input2);
                          input2.addEventListener('keydown', (e) => {
                            if (e.code === 'Enter') {
                              if (e.target.value.toLowerCase() === 'strogonoff de frango') {
                                newDiv.innerHTML = '';
                                const nextBtn3 = document.createElement('button');
                                nextBtn3.className = 'next-btn1';
                                nextBtn3.innerText = 'Te Quiero'
                                const img4 = document.createElement('img');
                                img1Div.innerHTML = '';
                                img4.src = 'imagens/img11.jpeg';
                                img4.className = 'img-ask1';
                                newDiv.appendChild(img1Div);
                                img1Div.appendChild(img4);
                                newDiv.appendChild(nextBtn3);
                                nextBtn3.addEventListener('click', () => {
                                  btnRepeat(newDiv, newH5, 'Qual é a nossa música?');
                                  const input3 = document.createElement('input');
                                  input3.className = 'input-form'
                                  newDiv.appendChild(input3);
                                  input3.addEventListener('keydown', (e) => {
                                    if (e.code === 'Enter') {
                                      if (e.target.value.toLowerCase() === 'você me faz tão bem' || 'pra você acreditar') {
                                        newDiv.innerHTML = '';
                                        const nextBtn4 = document.createElement('button');
                                        nextBtn4.className = 'next-btn1';
                                        nextBtn4.innerText = 'Amo-te!'
                                        const img5 = document.createElement('img');
                                        img1Div.innerHTML = '';
                                        img5.src = 'imagens/img8.jpeg';
                                        img5.className = 'img-ask1';
                                        newDiv.appendChild(img1Div);
                                        img1Div.appendChild(img5);
                                        newDiv.appendChild(nextBtn4);
                                        nextBtn4.addEventListener('click', () => {
                                          btnRepeat(newDiv, newH5, 'Nossos Momentos 💓');
                                          const nextBtn5 = document.createElement('button');
                                          nextBtn5.className = 'next-btn1';
                                          nextBtn5.innerText = 'Tinhamuh'
                                          const img6 = document.createElement('img');
                                          img1Div.innerHTML = '';
                                          img6.src = 'imagens/img1.jpeg';
                                          img6.className = 'img-ask1';
                                          newDiv.appendChild(img1Div);
                                          img1Div.appendChild(img6);
                                          newDiv.appendChild(nextBtn5);
                                          setInterval(() => {
                                            if (count === 12) {
                                              count = 1;
                                              img6.remove()
                                              img6.src = `imagens/img${count}.jpeg`
                                              img1Div.appendChild(img6)
                                            } else {
                                              count += 1;
                                              img6.remove()
                                              img6.src = `imagens/img${count}.jpeg`
                                              img1Div.appendChild(img6)
                                            }
                                          }, 3500);
                                          nextBtn5.addEventListener('click', () => {
                                            newDiv.remove();
                                            const anotherDiv = document.createElement('div');
                                            anotherDiv.innerText = 'Espero que o nosso dia seja muito feliz, assim como eu sou feliz contigo. Amo-te minha princesa!';
                                            anotherDiv.id = 'final-text';
                                            body.appendChild(anotherDiv);
                                          })
                                        })
                                      } else {
                                        makePopout();
                                      }
                                    }
                                  })
                                })
                              } else {
                                makePopout();
                              }
                            }
                          })
                        })
                      } else {
                        makePopout();
                      }
                    }
                  }) 
                })
              } else {
                makePopout();
              }
            }
          })
        })
      } else {
        makePopout();
      }
    }
  })
});
