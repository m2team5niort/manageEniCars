/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
      id
      name
      description
      modele
      places
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
      id
      name
      description
      modele
      places
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
      id
      name
      description
      modele
      places
      createdAt
      updatedAt
    }
  }
`;
export const onCreateModel = /* GraphQL */ `
  subscription OnCreateModel {
    onCreateModel {
      id
      name
      brand
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateModel = /* GraphQL */ `
  subscription OnUpdateModel {
    onUpdateModel {
      id
      name
      brand
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteModel = /* GraphQL */ `
  subscription OnDeleteModel {
    onDeleteModel {
      id
      name
      brand
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      name
      city
      departement
      zip
      streetNumber
      longitude
      latitude
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      name
      city
      departement
      zip
      streetNumber
      longitude
      latitude
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      name
      city
      departement
      zip
      streetNumber
      longitude
      latitude
      createdAt
      updatedAt
    }
  }
`;
export const onCreateKey = /* GraphQL */ `
  subscription OnCreateKey {
    onCreateKey {
      id
      location {
        id
        name
        city
        departement
        zip
        streetNumber
        longitude
        latitude
        createdAt
        updatedAt
      }
      car {
        id
        name
        description
        modele
        places
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      keyLocationId
      keyCarId
    }
  }
`;
export const onUpdateKey = /* GraphQL */ `
  subscription OnUpdateKey {
    onUpdateKey {
      id
      location {
        id
        name
        city
        departement
        zip
        streetNumber
        longitude
        latitude
        createdAt
        updatedAt
      }
      car {
        id
        name
        description
        modele
        places
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      keyLocationId
      keyCarId
    }
  }
`;
export const onDeleteKey = /* GraphQL */ `
  subscription OnDeleteKey {
    onDeleteKey {
      id
      location {
        id
        name
        city
        departement
        zip
        streetNumber
        longitude
        latitude
        createdAt
        updatedAt
      }
      car {
        id
        name
        description
        modele
        places
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      keyLocationId
      keyCarId
    }
  }
`;
