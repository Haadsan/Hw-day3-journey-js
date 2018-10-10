const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeyStartLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return journeyStartLocations
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEndLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  })

  return journeyEndLocations
};

Traveller.prototype.getModesOfTransport = function () {
  const modesOfTransports = this.journeys.map((journey) => {
    return journey.transport;
  })

  return modesOfTransports
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;

  });

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalDistance, journey) => {
    return totalDistance + journey.distance;
  }, 0)


};

Traveller.prototype.getUniqueModesOfTransport = function () {

};




module.exports = Traveller;
