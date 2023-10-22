const loginData = document.getElementById('data');
const user = {
  email: 'omerboran',
  password: '1234',
};
function loginForm(form) {
  loginData.classList = '';
  const formdata = new FormData(form);

  if (user.email != formdata.get('email')) {
    loginData.innerHTML = 'Email Eşleşmiyor';
    loginData.classList = 'error';
    return;
  }
  if (user.password !== formdata.get('password')) {
    loginData.innerHTML = 'Şifreniz Eşleşmiyor';
    loginData.classList = 'error';
    return;
  }
  loginData.innerHTML = `
  E-Postanız : ${formdata.get('email')} <br>
  Şifreniz : ${formdata.get('password')}<br>
  Giriş Başarılı
  `;
}

const tableData = [
  { name: 'omer', surName: 'boran', age: 15 },
  { name: 'muhammet', surName: 'sabah', age: 15 },
  { name: 'samet', surName: 'aler', age: 15 },
  { name: 'omer', surName: 'boran', age: 15 },
  { name: 'muhammet', surName: 'sabah', age: 15 },
  { name: 'samet', surName: 'aler', age: 15 },
  { name: 'omer', surName: 'boran', age: 15 },
  { name: 'muhammet', surName: 'sabah', age: 15 },
  { name: 'samet', surName: 'aler', age: 15 },
  { name: 'omer', surName: 'boran', age: 15 },
  { name: 'muhammet', surName: 'sabah', age: 15 },
  { name: 'samet', surName: 'aler', age: 15 },
];
const tablebody = document.getElementById('tablebody');
function tableInster() {
  var datahmtl = tableData.map((item) => {
    return `<tr>
      <td>${item.name}</td><td>${item.surName}</td><td>${item.age}</td>
    </tr>`;
  });
  tablebody.innerHTML = datahmtl.join('');
}
tableInster();
