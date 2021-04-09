const getdate = somedatedormat => {
    try{
        let date;
        somedatedormat ? date = new Date(somedatedormat) : date = new Date();

        const utc = date.toUTCString();
        const unix = date.valueOf();

        if(utc === "Invalid Date"){
            throw new Error("Invalid date");
        }

        return {unix: unix, utc: utc};
    }
    catch(err){
        return {error: "Invalid Date"};
    }
}

exports.currentDate = (req, res, next) => {
    const currdate = getdate();
    let scode;
    currdate.error ? scode = 422 : scode = 200;
    res.status(scode).json(currdate);
}

exports.specificDate = (req, res, next) => {
    let dateString = req.params.date.trim();
    /-/.test(dateString) ? dateString : dateString = parseInt(dateString);
    const response = getdate(dateString);
    response.error ? scode = 422 : scode = 200;
    res.status(scode).json(response);
}