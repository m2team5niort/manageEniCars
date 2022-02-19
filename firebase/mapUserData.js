export const mapUserData = (user) => {
    const { uid, email, xa, displayName, photoUrl } = user

    let firstName = displayName.split(' ')[0]
    let lastname = displayName.split(' ')[1]

    return {
        id: uid,
        email,
        token: xa,
        lastName: lastname,
        firstName: firstName,
        profilePic: photoUrl
    }
}