const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

export {
    byPropKey
}