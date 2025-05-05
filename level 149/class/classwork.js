function capitalizeNames(names) {
  return names.map(name => {
    if (name.length === 0) return ''; // handle empty strings
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  });
}
