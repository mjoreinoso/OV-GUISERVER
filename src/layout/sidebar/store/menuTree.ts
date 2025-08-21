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
          masks: { label: 'Masks' },
          algorithm: { label: 'Algorithm' },
          strobeSetup: { label: 'Strobe Setup' },
          vr: { label: 'Vertical Registration'},
          hr: { label: 'Horizontal Registration'},
          windowSetup: { label: 'Window Setup' }
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
