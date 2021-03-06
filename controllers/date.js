const getdate = somedatedormat => {
    let date;
    somedatedormat ? date = new Date(somedatedormat) : date = new Date();

    if(date.toString() === "Invalid Date"){
        return ({ error: "Invalid Date" });
    }

    const utc = date.toUTCString();
    const unix = date.valueOf();

    return {unix: unix, utc: utc};
}

exports.currentDate = (req, res, next) => {
    const currdate = getdate();
    res.json(currdate);
}

exports.specificDate = (req, res, next) => {
    let dateString = req.params.date;
    /\d{5,}/.test(dateString) ? dateString = parseInt(dateString) : dateString;
    const response = getdate(dateString);
    res.json(response);
}