import api_instance from "../utils/api";
import { API_GET_ORGS } from "../utils/constant";

class ApiService {
    getOrgInfo(orgId) {
        return api_instance.get(`${API_GET_ORGS}/${orgId}`);
    }
}

export default new ApiService();