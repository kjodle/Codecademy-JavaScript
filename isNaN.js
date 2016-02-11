var isEven = function(number) {
  if( (number % 2) == 0 ) {
      return true;
  } else if ( isNaN( number ) ) {
      return ( "Your input isn't a number!" );
  } else {
      return false;
  }
};

