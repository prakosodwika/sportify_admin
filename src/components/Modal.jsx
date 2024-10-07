import { useEffect, useState } from "react";

const Modal = ({modal, player, action}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (player) {
      setName(player.Name || '');
      setPhone(player.Phone || '');
      setEmail(player.Email || '');
      setAddress(player.Address || '');
      setPassword(player.Password || '');
    }
  }, [player]);

  const createHandler = () => {
    const data = { name, phone, email, address, password };
    console.log(data);
  }

  return (
    <div className="modal-overlay" onClick={modal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{ player 
          ? ( action === 'delete' 
            ? "Delete Player" 
            : "Edit Player")
          : "Create Player" }
        </h2>
        <p>{ player 
          ? ( action === 'delete' 
            ? <>Are you sure you want to delete <strong>{player.Name}</strong></>
            : "Update Player Account.")
          : "Set Up a New Player Account." }
        </p>
        <div>
          {
            action === 'delete' 
            ? (
              <>
                <div className="form-floating mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="Username"
                  />
                  <label htmlFor="floatingInput">Username</label>
                </div>
              </>
            ) : (
              <>
                <div className="form-floating mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="Username" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                    type="tel" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="Phone"
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Phone</label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="Email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                  type="text" 
                  className="form-control" 
                  id="floatingInput" 
                  placeholder="Address"
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Address</label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                    type="password" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="Password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Password</label>
                </div>      
              </>
            )
          }
        </div>
        <div className="d-flex justify-content-between mt-2">
          <button type="button" className="btn btn-warning w-25" onClick={modal}>
            Close
          </button>
          <button type="button" className="btn btn-primary w-25" onClick={createHandler}>
            { player 
              ? ( action === 'delete' 
                ? "Delete" 
                : "Edit" )
              : "Save" 
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal