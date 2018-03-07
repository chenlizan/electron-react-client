const {remote} = window.require('electron');
const contactController = remote.app.API.contactController;

export const getAllFriend = () => {

    return contactController.getAllFriend()
        .then(data => {
            return data;
        });
}
