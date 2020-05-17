const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('en-GB').format(date); // TODO

export default formatDate;
