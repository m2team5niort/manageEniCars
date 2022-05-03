export default async (req, res) => {

    if (req.method === 'POST' && req.body.adress) {
        const adress = req.body.adress ? req.body.adress : ''
        const result = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${adress}&autocomplete=0`)

        const data = await result.json();
        res.status(200).json(data.features)
    }

}