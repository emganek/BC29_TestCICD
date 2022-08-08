import moment from "moment";

export const formatDate = (data, formatForm ="LLL") =>{
    return moment(data).format(formatForm);
}