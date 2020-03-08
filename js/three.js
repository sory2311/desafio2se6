import resultOne from './one'
import resultTwo from './two'

function three(){
    let all= {
        status: "OK",
        one: resultOne(),
        two: resultTwo(),
    }

    document.write('Resultado Uno: ' + all.one + '<br>');
    document.write('Resultado Dos: ' + all.two)
}

three();
