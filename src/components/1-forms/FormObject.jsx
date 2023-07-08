import { useState } from "react";
//Form.jsx örneğinin aynısını bu defa tüm sayfayı object olarak tutarak yapalım
//n tane ayrı ayrı state tutmak yerine tek bir state içinde bileşenler yapalım
const FormObject = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  //formData State'i bir obje ve içinde 3 bilgi var
  //? aşağıdaki gibi destructuring yaparak bu 3 bilgiyi ayrıştırıyoruz
  const { username, email, password } = formData;

  const handleSubmit = (e) => {
    //yine form.jsx deki gibi her submit sonrası refresh yapmasını engelliyoruz
    e.preventDefault();

    alert(`
    This is only a simulation for backend process. If it were required, 
    the data would be sent to a server as follows:

      username: ${username}
      email: ${email}
      password: ${password}
    `);
    //alert yaptıktan sonra da State'e başlangıç değeri atıyoruz.
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  //form üzerindeki userName, email veya password alanlarından
  //herhangi biri onChange olursa handleFormData tetiklenir
  const handleFormData = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.name)
    // console.log(e.target.id)
    //bu 3 tanesinden hangisinin tetiklediğini bilmiyoruz bu nedenle
    //tetikleyenin [e.target.name]'ini e.target.value olarak yap diyoruz.
    //bunun için setter metoduna bir obje vermeliyiz, yani {} kullanılacak.
    //ayrıca "..." ile formData'yı spread etmeliyiz.
    //en sonunda da key:value olarak değer girmeliyiz.
    //burada 'value' belli (e.target.value), fakat 'key' belli değil.
    //bir 'key' i değişken olarak vermenin yöntemi [] kullanmaktır, yani [key] şeklinde.
    //tetikleyenin adını da e.target.name veya e.target.id bilgisiden alabiliriz
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-success">
        THE FORM BELOW DEMONSTRATES HANDLING THE THE DATA ENTERED IN THE INPUT
        BOXES AS AN OBJECT IN REACT ENVIRONMENT
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Hello {username}
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            //? OnChange event'ı input degeri her degistiginde tetiklenir. Biz de yazdıgımız event handler araciligi ile State'i guncelleyebilmis oluruz.
            onChange={handleFormData}
            // her state değişimini yansıtabilmek için value set edilmeli
            value={username}
            name="username"
          />
        </div>

        <div className="mb-1">
          <label htmlFor="email" className="form-label">
            Email address: <span className="text-danger">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleFormData}
            // her state değişimini yansıtabilmek için value set edilmeli
            value={email}
            name="email"
          />
        </div>
        <div id="emailHelp" className="form-text mb-4">
          (We'll never share your email with anyone else.)
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handleFormData}
            // her state değişimini yansıtabilmek için value set edilmeli
            value={password}
            name="password"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormObject;
