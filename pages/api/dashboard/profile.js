const profile = async (req, res) => {

    return res.status(200).json({
        result: {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            mail: req.body.mail,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            departement: req.body.departement,
            zip: req.body.zip,
        }
    })
}

export default profile