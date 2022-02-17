import UserService from "../../../service/UserService"

const profile = async (req, res) => {

    console.log(req)

    UserService.setUserFirestoreProfile(req).then(function (resultData) {
        console.log(resultData)
    })

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