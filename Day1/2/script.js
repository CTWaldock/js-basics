// function fullState(abbreviation)
// {if (abbreviation === 'NSW') {return 'New South Wales';}
// else if (abbreviation === 'QLD') {return 'Queensland';}
// else if (abbreviation === 'WA') {return 'Western Australia';}
// else if (abbreviation === 'SA') {return 'South Australia';}
// else if (abbreviation === 'ACT') {return 'Australian Capital Territory';}
// else if (abbreviation === 'NT') {return 'Northern Territory';}
// else if (abbreviation === 'VIC') {return 'Victoria';}}

const states = {
  NSW: 'New South Wales',
  QLD: 'Queensland',
  WA: 'Western Australia',
  SA: 'South Australia',
  NT: 'Northern Territory',
  TAS: 'Tasmania',
  VIC: 'Victoria'
}

const query = prompt('Enter a state abbreviation plz')
const state = states[query];
alert(state);
