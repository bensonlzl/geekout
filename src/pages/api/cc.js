const locations = [
    "Simei CC", "Bedok CC", "Choa Chu Kang CC", "Keat Hong CC"
];

function api(req, res) {
  res.statusCode = 200;
  res.json(locations);
}

export default api;
