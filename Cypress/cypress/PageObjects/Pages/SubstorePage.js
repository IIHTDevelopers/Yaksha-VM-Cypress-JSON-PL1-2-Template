export default class SubstorePage {

    constructor() {
        this.substore = {
            substoreLink: '',
            selectSubstore: '',
            inventoryRequisition: '',
            consumption: '',
            reports: '',
            patientConsumption: '',
            return: '',
            inventory: '',
            signoutCursor: '',
            tooltip: '',
        }
    }

    /**
     * @Test11
     * @description : This method verifies that the user is able to navigate between the sub modules.
     * @expected : Ensure that it should navigate to each sections of the "substore" module 
     */
    verifyNavigationBetweenSubmodules() {
        // Write your logic here
    }

    /**
    * @Test12
    * @description This method verifies the tooltip text displayed when hovering over the cursor icon in the Inventory tab.
    * @expected
    * Tooltip text should contain: **"To change, you can always click here."**
    */
    verifyTooltipText() {
        // Write your logic here
    }

    /**
     * @Test13
     * @description This method navigates to the Inventory Requisition section, captures a screenshot of the page, 
     *              and saves it in the screenshots folder.
     * @expected
     * Screenshot of the page is captured and saved successfully.
     */
    captureInventoryRequisitionScreenshot() {
        // Write your logic here
    }
}