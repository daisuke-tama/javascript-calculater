　　let target = document.getElementById("stop")
　　
　　
    function update( _v )
    {
        document.querySelector( 'input' ).value = _v
    }
    
    function symbol( _v )
    {
        document.querySelector( 'input' ).value += _v
        target.disabled = true

    }
    
    function append( _v )
    {
        document.querySelector( 'input' ).value += _v
        target.disabled = false
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
    