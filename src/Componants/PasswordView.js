import React from 'react'

function PasswordView() {
  return (
    <div>
        <form action="#">
            <div class="form-controller col-lg-12 formIpt">
                <label for="">Current Password</label>
                <input type="password" name="fn" placeholder="Current Password" />
            </div>
            <div class="form-controller col-lg-12 formIpt">
                <label for="">New Password</label>
                <input type="password" name="fn" placeholder="New Password" />
            </div>
            <div class="form-controller col-lg-12 formIpt">
                <label for="">Confirm New Password</label>
                <input type="password" name="fn" placeholder="Confirm New Password" />
            </div>
            <div className="addPayment">
                <div class="addSaveBtn">
                    <button class="svBtn"> SAVE </button>
                </div>
            </div>
        </form>
    </div>
  );
}

export default PasswordView;