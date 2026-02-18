# Day‑wise Agenda

### Official SAP Documents

🔗 [SAP Fiori Tools](https://sapui5.hana.ondemand.com/test-resources/sap/fe/core/fpmExplorer/index.html#/topic/fioriTools) <br>
🔗 [UI5 Tooling](https://ui5.github.io/cli/stable/)

## Day 1: Set Up BTP Trial, ABAP Environment & BAS

### SAP UID Set Up (First Time)

- 🔗 [sap.com](https://www.sap.com/)
- Tutorial: [Get an Account on SAP BTP Trial (Step 1-3)](https://developers.sap.com/tutorials/hcp-create-trial-account.html)
    
### BTP Trial Account Set Up
    
- 🔗 [BTP Trial](https://account.hanatrial.ondemand.com/trial/#/home/trial)    
    ⚠️ ‘US East (VA)’ is preferable as the region for being more stable and with more services.    
- Tutorial:  [Get an Account on SAP BTP Trial (Step 4 Onwards)](https://developers.sap.com/tutorials/hcp-create-trial-account.html)
- Comes with default BAS.
- Create dev space, `myFioriSpace` for SAP Fiori.

### ABAP Trial (Booster)
    
- 🔗 [Create an SAP BTP ABAP Environment Trial User](https://developers.sap.com/tutorials/abap-environment-trial-onboarding..html)
    
### Connect BTP Trial with ADT

- Connect ADT with BTP Trial Account.
- Mark Odata `/DMO/UI_TRAVEL_D_D_O4` as favourite.

## Day 2: App Generation (OData V4) and List Page Modification

- Open Business Application Studio and login to sub account `cf login --sso` / `cf login`.
- Generate application `z.trvl.ui.00` (Manage Travel) using OData `/DMO/UI_TRAVEL_D_D_O4`.<br>
⚠️ Open the ‘project’ directory before working on it.        
- Global
    - Enable **flexible column** Layout.
    - Globally set table creation as **InlineCreationRows**.
- Travel List Page
    - Toggle list **selection mode** to see impact, leave it back to default (Multi).
    - Disable **excel export**.
    - Enable **mass edit** for ‘Description’ and ‘Overall Status’.
    - Include header in **column width** | Can also be done at column level.
    - Table actions
        - Group ‘Accept Travel’ and ‘Reject Travel’ under an **action menu** ‘Set Travel Status’.
        - Make ‘Accept Travel’ and ‘Reject Travel’ as **critical action** and add **custom localization** text to the confirmation pop up.
            - `Key|EntitySet|ActionName`='localization text'
            - 🔗 [Adding Confirmation Popovers for Actions](https://ui5.sap.com/#/topic/87130de10c8a44269c605b0322df6b1a)
            - 🔗 [Localization of UI Texts](https://ui5.sap.com/#/topic/b8cb649973534f08a6047692f8c6830d)
            - 🔗 [FPM Explorer - enhanceI18n](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/guidance/adaptI18n)
            - 🔗 [i18n - Text Classification](https://ui5.sap.com/#/topic/582ce93d326540f59d149031a44d5fb0)

## Day 3: Object Page Modification & Summary
    
- Travel Object Page
    - Add **custom localization** text to the confirmation pop up of 'Accept Travel' and 'Reject Travel' critical actions.
        - 🔗 [Localization of UI Texts](https://ui5.sap.com/#/topic/b8cb649973534f08a6047692f8c6830d)
        - 🔗 [FPM Explorer - enhanceI18n](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/guidance/adaptI18n)
        - 🔗 [i18n - Text Classification](https://ui5.sap.com/#/topic/582ce93d326540f59d149031a44d5fb0)
    - Change default toast message on 'Save'.
    - Toggle list **selection mode** to see impact, leave it back to default (Multi).
    - Enable **full screen mode** (Pop Up) for Object Page table.
    - Change table type to **grid table**.
    - Creation Mode
        - Set table creation mode as **Inline** | This will overwrite the global **InlineCreationRows**.
            - InlineCreationRows
                - No 'Create' button.
                - During create or edit, default empty row will be added to the table.
                - On data entry, new empty row will be added to the table.
                - On save, emptry row will be discarded.
            - Inline
                - On clicking 'Create' button; new empty row is added to the table.
                - Multiple empty rows can be added by clicking multiple times.                        
    - Other options from List Page which are also available for Object Page 
        - Disable **excel export**.
        - Enable **mass edit**.
        - Include Header in **column width** | Can be done at column level.
    - Other options available
        - Disable **copy to clipboard**.
        - Disable **paste from excel**.