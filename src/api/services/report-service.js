import API from '../../utils/API';


 async function ReportServices(
    attachment, 
    interactionHistory,
    classification
    ) {
    const getUser = await API.get("/user");
    const getCategory = await API.get("/categrory");
    const getUrgencyLevel = await API.get("/urgency-level");
    const getReportStatus = await API.get("/report-status");
    const setReportAttachment = await API.post("/report-attachment", attachment);
    const setReportInteractionHistory = await API.post("/report-interaction-history", interactionHistory);
    const setReportClassification = await API.post("/report-classification", classification);
}

export default ReportServices;
