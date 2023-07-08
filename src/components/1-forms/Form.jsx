import { useState } from "react";
//Burada klasik bootstrap kullanıyoruz. react-bootstrap olsaydı
//button vs komponent olarak import edilmeliydi. Örneğin:
//default import ise: import Button from "react-bootstrap/Button"
//named import ise: import { Button } from "react-bootstrap"
//klasik bootstrap kullnırken de bazı nüanslar var:
//1)class= yerine className= yazılmalı
//2)html yerine htmlFor yazılmalı
//3)self closing taglar vardır. Yani klasik bootstrap elemanlarını
//sonunda self closing olacak şekile getiririz   <form  ......./>
//Artık gidip getbootstrap.com dan istediiğimizi alıp getirebiliriz
//tek tek elle düzeltmek yerine html2jsx sitelerinden faydalanabiliriz

const Form = () => {
  // komponentin başlangıcı
  //komponentin return kısmından öncesinde stateler tanımlanır
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //onChange event'ı tetiklendiğinde bir event objesi üretilir
  //Bu event objesi, e ile arguman olarak alınmış olur.
  const handleUsername = (e) => {
    //bu event'ı tetikleyen nesneye, event'in "target" alt nesnesiyle erişilebir.
    //Yani, e.target demek, Username girilen input elemanı demekdir.
    //bu input elemanının değerine de value property'si ile ulaşırız.
    // console.log(e.target.value)
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    //submit butonuna tıklanınca render yapıp refresh
    //yapmasını engellemek için preventDefault kullanılır
    e.preventDefault();

    //Form submit olduğunda yani submit butonuna tıklandığında
    //sanki sunucuya yollanmış gibi simüle etmek için, neler yollandığı
    //ekrana alert olarak aşağıdaki gibi yazdırılır
    alert(`
    This is only a simulation for backend process. If it were required, 
    the data would be sent to a server as follows:

      username: ${username}
      email: ${email}
      password: ${password}
    `);
    //ardından da Sate değerleri resetlenir yani
    //setter metotlarına boş değerler atanır.
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    // sola ve tepeye sıfıra sıfır yapışmış, normale çekelim.
    // Bunun için container klası kullanılabilir
    // üzerine de ilaveten margin top 4 konabilir
    <div className="container mt-4">
      {/* form içinne bir başlık ekleyip text-center ve yeşil renkli yapalım */}
      <h4 className="text-center text-success">
        THE FORM BELOW DEMONSTRATES GETTING THE DATA ENTERED IN THE INPUT BOXES
        IN REACT ENVIRONMENT
      </h4>
      {/* Aşağıdaki form getbootstrap.com dan alındı */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address: <span className="text-primary">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            //The "aria-" attributes in HTML stand for Accessible Rich Internet Applications.
            //They are a set of attributes used to enhance the accessibility of
            //web content for users with disabilities.
            aria-describedby="emailHelp"
            //onChange event için bir Callback function kullanılmış.
            //Callback function olarak bir arrow function seçilmiş.
            //bu arrow function, parametre olarak e event objesini almış.
            //aldığı e nesnesinin e.target.value değerini, eMail State'in değerini
            //set etmek için, onun setter metodu olan setEmail metoduna göndermiş.
            //Böylece her onChange event olduğunda o event'i tetikleyen nesnenin,
            //yani input nesnesinin value değeri ile set edilir.
            onChange={(e) => setEmail(e.target.value)}
            //input elemanının value değeri= email State'inin değeri yapar.
            value={email}
          />
          <div id="emailHelp" class="form-text">
            (We'll never share your email with anyone else.)
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            UserName: <span className="text-info">{username}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            // OnChange event'ı input degeri her degistiginde aşağıdaki gibi tetiklenir.
            // Bu event handler araciligi ile State'i guncelleyebilmis oluruz.
            onChange={handleUsername}
            value={username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        {/* bootstrapten alınan butonun konumunu değiştirmek için 
        bir div içine konup className özelliği text-center yapılır */}
        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
