const { people } = require('../data');

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' });
  }
  res.status(201).send({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' });
  }
  res.status(201).send({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  //find the person to change
  const person = people.find((person) => {
    return person.id === Number(id);
  });
  console.log('person is ' + person);
  //if no person is found 404
  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with id ` });
  }
  //create a new array and change the value of name
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  // const { id } = req.params;
  //const { name } = req.body;
  //find the person to change
  const person = people.find((person) => {
    return person.id === Number(req.params.id);
  });
  //if no person is found 404
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id} ` });
  }
  //create a new array and change the value of name
  const newPeople = people.filter((person) => {
    return person.id !== Number(req.params.id);
  });
  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
