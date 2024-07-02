const nameRegexp = /^[a-zA-Z][a-z0-9A-Z\-\s]{2,24}$/;
const phoneRegexp = /^\+\d{2}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
const emailRegexp = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line

export { nameRegexp, phoneRegexp, emailRegexp };
