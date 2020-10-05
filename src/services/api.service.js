import api_instance from "../utils/api";
import { API_ORG } from "../utils/constant";

class ApiService {
    getOrgInfo(orgId) {
        return api_instance.get(`${API_ORG}/${orgId}`);
    }
}

export default new ApiService();