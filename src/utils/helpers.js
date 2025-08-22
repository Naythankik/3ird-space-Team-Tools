const formattedDate = (value) => {
    const date = new Date(value);

    const options = { hour: 'numeric', minute: 'numeric' };
    return date.toLocaleTimeString([], options);
}


export { formattedDate }
