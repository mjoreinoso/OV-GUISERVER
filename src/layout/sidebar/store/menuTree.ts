import inspectionSetup from '@/assets/sidebarIcons/inspectionSetup.svg'

export const menuTree = {
  'inspection-setup': {
    label: 'Inspection Setup',
    icon: inspectionSetup,
    children: {
      osw: {
        label: 'OSW - Outer Sidewall', 
        children: {
          image: { label: 'Image' },
          strobeSetup: { label: 'Strobe Setup' }
        }
      },
      rld: {
        label: 'RLD - Residual Liquid Detection', 
        children: {
          ir: { label: 'IR' },
          rf: { label: 'RF' }
        }
      }
    }
  }
}
