　　let stop = document.getElementById('push_symbol');
　　let stop2 = document.getElementById('push_symbol2');
　　let stop3 = document.getElementById('push_symbol3');
　　let stop4 = document.getElementById('push_symbol4');
　　let stop5 = document.getElementById('push_symbol5');
　　
　　function symbol_push() {
　    　stop.disabled = true;
        stop2.disabled = true;
        stop3.disabled = true;
        stop4.disabled = true;
        stop5.disabled = true;
　　};
　　
　　function symbol_not_push() {
        stop.disabled = false;
        stop2.disabled = false;
        stop3.disabled = false;
        stop4.disabled = false;
        stop5.disabled = false;
　　};
　　
　　function update( _v )
    {
        document.querySelector( 'input' ).value = _v;
        symbol_not_push()
    }
    
    function symbol( _v )
    {
        document.querySelector( 'input' ).value += _v;
        symbol_push()
    }
    
    function append( _v )
    {
        document.querySelector( 'input' ).value += _v;
        symbol_not_push()
    }

    function calc()
    {
        const v = document.querySelector( 'input' ).value
        try {
            const f = new Function( 'return ' + v )
            update( f().toString() )
        } catch( _error ) {
            update( _error )
        }
    }
