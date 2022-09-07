/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar($filter: ModelSubscriptionCarFilterInput) {
    onCreateCar(filter: $filter) {
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
          isReferenced
          createdAt
          updatedAt
        }
        car {
          id
          name
          description
          places
          available
          numberPlate
          image
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
        isReferenced
        createdAt
        updatedAt
      }
      available
      numberPlate
      image
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
  subscription OnUpdateCar($filter: ModelSubscriptionCarFilterInput) {
    onUpdateCar(filter: $filter) {
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
          isReferenced
          createdAt
          updatedAt
        }
        car {
          id
          name
          description
          places
          available
          numberPlate
          image
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
        isReferenced
        createdAt
        updatedAt
      }
      available
      numberPlate
      image
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
  subscription OnDeleteCar($filter: ModelSubscriptionCarFilterInput) {
    onDeleteCar(filter: $filter) {
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
          isReferenced
          createdAt
          updatedAt
        }
        car {
          id
          name
          description
          places
          available
          numberPlate
          image
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
        isReferenced
        createdAt
        updatedAt
      }
      available
      numberPlate
      image
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
  subscription OnCreateModel($filter: ModelSubscriptionModelFilterInput) {
    onCreateModel(filter: $filter) {
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
          available
          numberPlate
          image
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
  subscription OnUpdateModel($filter: ModelSubscriptionModelFilterInput) {
    onUpdateModel(filter: $filter) {
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
          available
          numberPlate
          image
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
  subscription OnDeleteModel($filter: ModelSubscriptionModelFilterInput) {
    onDeleteModel(filter: $filter) {
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
          available
          numberPlate
          image
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
  subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onCreateLocation(filter: $filter) {
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
          available
          numberPlate
          image
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
      isReferenced
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onUpdateLocation(filter: $filter) {
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
          available
          numberPlate
          image
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
      isReferenced
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
    onDeleteLocation(filter: $filter) {
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
          available
          numberPlate
          image
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
      isReferenced
      createdAt
      updatedAt
    }
  }
`;
export const onCreateKey = /* GraphQL */ `
  subscription OnCreateKey($filter: ModelSubscriptionKeyFilterInput) {
    onCreateKey(filter: $filter) {
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
        isReferenced
        createdAt
        updatedAt
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
          isReferenced
          createdAt
          updatedAt
        }
        available
        numberPlate
        image
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
  subscription OnUpdateKey($filter: ModelSubscriptionKeyFilterInput) {
    onUpdateKey(filter: $filter) {
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
        isReferenced
        createdAt
        updatedAt
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
          isReferenced
          createdAt
          updatedAt
        }
        available
        numberPlate
        image
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
  subscription OnDeleteKey($filter: ModelSubscriptionKeyFilterInput) {
    onDeleteKey(filter: $filter) {
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
        isReferenced
        createdAt
        updatedAt
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
          isReferenced
          createdAt
          updatedAt
        }
        available
        numberPlate
        image
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
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      email
      isAdmin
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      email
      isAdmin
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      email
      isAdmin
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTravel = /* GraphQL */ `
  subscription OnCreateTravel($filter: ModelSubscriptionTravelFilterInput) {
    onCreateTravel(filter: $filter) {
      id
      driver {
        id
        name
        email
        isAdmin
        createdAt
        updatedAt
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
          isReferenced
          createdAt
          updatedAt
        }
        available
        numberPlate
        image
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
      departure {
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
        isReferenced
        createdAt
        updatedAt
      }
      arrival {
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
        isReferenced
        createdAt
        updatedAt
      }
      passengers
      state
      createdAt
      updatedAt
      travelDriverId
      travelCarId
      travelModelId
      travelDepartureId
      travelArrivalId
    }
  }
`;
export const onUpdateTravel = /* GraphQL */ `
  subscription OnUpdateTravel($filter: ModelSubscriptionTravelFilterInput) {
    onUpdateTravel(filter: $filter) {
      id
      driver {
        id
        name
        email
        isAdmin
        createdAt
        updatedAt
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
          isReferenced
          createdAt
          updatedAt
        }
        available
        numberPlate
        image
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
      departure {
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
        isReferenced
        createdAt
        updatedAt
      }
      arrival {
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
        isReferenced
        createdAt
        updatedAt
      }
      passengers
      state
      createdAt
      updatedAt
      travelDriverId
      travelCarId
      travelModelId
      travelDepartureId
      travelArrivalId
    }
  }
`;
export const onDeleteTravel = /* GraphQL */ `
  subscription OnDeleteTravel($filter: ModelSubscriptionTravelFilterInput) {
    onDeleteTravel(filter: $filter) {
      id
      driver {
        id
        name
        email
        isAdmin
        createdAt
        updatedAt
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
          isReferenced
          createdAt
          updatedAt
        }
        available
        numberPlate
        image
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
      departure {
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
        isReferenced
        createdAt
        updatedAt
      }
      arrival {
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
        isReferenced
        createdAt
        updatedAt
      }
      passengers
      state
      createdAt
      updatedAt
      travelDriverId
      travelCarId
      travelModelId
      travelDepartureId
      travelArrivalId
    }
  }
`;
export const onCreateIncident = /* GraphQL */ `
  subscription OnCreateIncident($filter: ModelSubscriptionIncidentFilterInput) {
    onCreateIncident(filter: $filter) {
      id
      name
      criticality
      date
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
          isReferenced
          createdAt
          updatedAt
        }
        available
        numberPlate
        image
        createdAt
        updatedAt
        modelCarsId
        locationCarsId
        carModelId
        carKeyId
        carLocationId
      }
      responsible {
        id
        name
        email
        isAdmin
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      incidentCarId
      incidentResponsibleId
    }
  }
`;
export const onUpdateIncident = /* GraphQL */ `
  subscription OnUpdateIncident($filter: ModelSubscriptionIncidentFilterInput) {
    onUpdateIncident(filter: $filter) {
      id
      name
      criticality
      date
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
          isReferenced
          createdAt
          updatedAt
        }
        available
        numberPlate
        image
        createdAt
        updatedAt
        modelCarsId
        locationCarsId
        carModelId
        carKeyId
        carLocationId
      }
      responsible {
        id
        name
        email
        isAdmin
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      incidentCarId
      incidentResponsibleId
    }
  }
`;
export const onDeleteIncident = /* GraphQL */ `
  subscription OnDeleteIncident($filter: ModelSubscriptionIncidentFilterInput) {
    onDeleteIncident(filter: $filter) {
      id
      name
      criticality
      date
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
          isReferenced
          createdAt
          updatedAt
        }
        available
        numberPlate
        image
        createdAt
        updatedAt
        modelCarsId
        locationCarsId
        carModelId
        carKeyId
        carLocationId
      }
      responsible {
        id
        name
        email
        isAdmin
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      incidentCarId
      incidentResponsibleId
    }
  }
`;
