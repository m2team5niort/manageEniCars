/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
      id
      name
      description
      model {
        id
        name
        brand
        image
        description
        cars {
          nextToken
        }
        createdAt
        updatedAt
      }
      places
      key {
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
          travelLocationsId
        }
        car {
          id
          name
          description
          places
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        createdAt
        updatedAt
        locationKeysId
        keyLocationId
        keyCarId
      }
      location {
        id
        name
        city
        departement
        zip
        streetNumber
        longitude
        latitude
        cars {
          nextToken
        }
        keys {
          nextToken
        }
        createdAt
        updatedAt
        travelLocationsId
      }
      createdAt
      updatedAt
      modelCarsId
      locationCarsId
      carModelId
      carKeyId
      carLocationId
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
      id
      name
      description
      model {
        id
        name
        brand
        image
        description
        cars {
          nextToken
        }
        createdAt
        updatedAt
      }
      places
      key {
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
          travelLocationsId
        }
        car {
          id
          name
          description
          places
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        createdAt
        updatedAt
        locationKeysId
        keyLocationId
        keyCarId
      }
      location {
        id
        name
        city
        departement
        zip
        streetNumber
        longitude
        latitude
        cars {
          nextToken
        }
        keys {
          nextToken
        }
        createdAt
        updatedAt
        travelLocationsId
      }
      createdAt
      updatedAt
      modelCarsId
      locationCarsId
      carModelId
      carKeyId
      carLocationId
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
      id
      name
      description
      model {
        id
        name
        brand
        image
        description
        cars {
          nextToken
        }
        createdAt
        updatedAt
      }
      places
      key {
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
          travelLocationsId
        }
        car {
          id
          name
          description
          places
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        createdAt
        updatedAt
        locationKeysId
        keyLocationId
        keyCarId
      }
      location {
        id
        name
        city
        departement
        zip
        streetNumber
        longitude
        latitude
        cars {
          nextToken
        }
        keys {
          nextToken
        }
        createdAt
        updatedAt
        travelLocationsId
      }
      createdAt
      updatedAt
      modelCarsId
      locationCarsId
      carModelId
      carKeyId
      carLocationId
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
      cars {
        items {
          id
          name
          description
          places
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        nextToken
      }
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
      cars {
        items {
          id
          name
          description
          places
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        nextToken
      }
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
      cars {
        items {
          id
          name
          description
          places
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        nextToken
      }
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
      cars {
        items {
          id
          name
          description
          places
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        nextToken
      }
      keys {
        items {
          id
          createdAt
          updatedAt
          locationKeysId
          keyLocationId
          keyCarId
        }
        nextToken
      }
      createdAt
      updatedAt
      travelLocationsId
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
      cars {
        items {
          id
          name
          description
          places
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        nextToken
      }
      keys {
        items {
          id
          createdAt
          updatedAt
          locationKeysId
          keyLocationId
          keyCarId
        }
        nextToken
      }
      createdAt
      updatedAt
      travelLocationsId
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
      cars {
        items {
          id
          name
          description
          places
          createdAt
          updatedAt
          modelCarsId
          locationCarsId
          carModelId
          carKeyId
          carLocationId
        }
        nextToken
      }
      keys {
        items {
          id
          createdAt
          updatedAt
          locationKeysId
          keyLocationId
          keyCarId
        }
        nextToken
      }
      createdAt
      updatedAt
      travelLocationsId
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
        cars {
          nextToken
        }
        keys {
          nextToken
        }
        createdAt
        updatedAt
        travelLocationsId
      }
      car {
        id
        name
        description
        model {
          id
          name
          brand
          image
          description
          createdAt
          updatedAt
        }
        places
        key {
          id
          createdAt
          updatedAt
          locationKeysId
          keyLocationId
          keyCarId
        }
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
          travelLocationsId
        }
        createdAt
        updatedAt
        modelCarsId
        locationCarsId
        carModelId
        carKeyId
        carLocationId
      }
      createdAt
      updatedAt
      locationKeysId
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
        cars {
          nextToken
        }
        keys {
          nextToken
        }
        createdAt
        updatedAt
        travelLocationsId
      }
      car {
        id
        name
        description
        model {
          id
          name
          brand
          image
          description
          createdAt
          updatedAt
        }
        places
        key {
          id
          createdAt
          updatedAt
          locationKeysId
          keyLocationId
          keyCarId
        }
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
          travelLocationsId
        }
        createdAt
        updatedAt
        modelCarsId
        locationCarsId
        carModelId
        carKeyId
        carLocationId
      }
      createdAt
      updatedAt
      locationKeysId
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
        cars {
          nextToken
        }
        keys {
          nextToken
        }
        createdAt
        updatedAt
        travelLocationsId
      }
      car {
        id
        name
        description
        model {
          id
          name
          brand
          image
          description
          createdAt
          updatedAt
        }
        places
        key {
          id
          createdAt
          updatedAt
          locationKeysId
          keyLocationId
          keyCarId
        }
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
          travelLocationsId
        }
        createdAt
        updatedAt
        modelCarsId
        locationCarsId
        carModelId
        carKeyId
        carLocationId
      }
      createdAt
      updatedAt
      locationKeysId
      keyLocationId
      keyCarId
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      email
      isAdmin
      createdAt
      updatedAt
      travelPassengersId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      email
      isAdmin
      createdAt
      updatedAt
      travelPassengersId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      email
      isAdmin
      createdAt
      updatedAt
      travelPassengersId
    }
  }
`;
export const onCreateTravel = /* GraphQL */ `
  subscription OnCreateTravel {
    onCreateTravel {
      id
      locations {
        items {
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
          travelLocationsId
        }
        nextToken
      }
      driver {
        id
        name
        email
        isAdmin
        createdAt
        updatedAt
        travelPassengersId
      }
      passengers {
        items {
          id
          name
          email
          isAdmin
          createdAt
          updatedAt
          travelPassengersId
        }
        nextToken
      }
      car {
        id
        name
        description
        model {
          id
          name
          brand
          image
          description
          createdAt
          updatedAt
        }
        places
        key {
          id
          createdAt
          updatedAt
          locationKeysId
          keyLocationId
          keyCarId
        }
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
          travelLocationsId
        }
        createdAt
        updatedAt
        modelCarsId
        locationCarsId
        carModelId
        carKeyId
        carLocationId
      }
      model {
        id
        name
        brand
        image
        description
        cars {
          nextToken
        }
        createdAt
        updatedAt
      }
      dateBegin
      dateEnd
      places
      createdAt
      updatedAt
      travelDriverId
      travelCarId
      travelModelId
    }
  }
`;
export const onUpdateTravel = /* GraphQL */ `
  subscription OnUpdateTravel {
    onUpdateTravel {
      id
      locations {
        items {
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
          travelLocationsId
        }
        nextToken
      }
      driver {
        id
        name
        email
        isAdmin
        createdAt
        updatedAt
        travelPassengersId
      }
      passengers {
        items {
          id
          name
          email
          isAdmin
          createdAt
          updatedAt
          travelPassengersId
        }
        nextToken
      }
      car {
        id
        name
        description
        model {
          id
          name
          brand
          image
          description
          createdAt
          updatedAt
        }
        places
        key {
          id
          createdAt
          updatedAt
          locationKeysId
          keyLocationId
          keyCarId
        }
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
          travelLocationsId
        }
        createdAt
        updatedAt
        modelCarsId
        locationCarsId
        carModelId
        carKeyId
        carLocationId
      }
      model {
        id
        name
        brand
        image
        description
        cars {
          nextToken
        }
        createdAt
        updatedAt
      }
      dateBegin
      dateEnd
      places
      createdAt
      updatedAt
      travelDriverId
      travelCarId
      travelModelId
    }
  }
`;
export const onDeleteTravel = /* GraphQL */ `
  subscription OnDeleteTravel {
    onDeleteTravel {
      id
      locations {
        items {
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
          travelLocationsId
        }
        nextToken
      }
      driver {
        id
        name
        email
        isAdmin
        createdAt
        updatedAt
        travelPassengersId
      }
      passengers {
        items {
          id
          name
          email
          isAdmin
          createdAt
          updatedAt
          travelPassengersId
        }
        nextToken
      }
      car {
        id
        name
        description
        model {
          id
          name
          brand
          image
          description
          createdAt
          updatedAt
        }
        places
        key {
          id
          createdAt
          updatedAt
          locationKeysId
          keyLocationId
          keyCarId
        }
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
          travelLocationsId
        }
        createdAt
        updatedAt
        modelCarsId
        locationCarsId
        carModelId
        carKeyId
        carLocationId
      }
      model {
        id
        name
        brand
        image
        description
        cars {
          nextToken
        }
        createdAt
        updatedAt
      }
      dateBegin
      dateEnd
      places
      createdAt
      updatedAt
      travelDriverId
      travelCarId
      travelModelId
    }
  }
`;
