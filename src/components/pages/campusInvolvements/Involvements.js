import React from 'react'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

export const involvements = {
    maiss: [
        { name: <Link component={RouterLink} to="/active-brothers/le-an-pham" color="inherit">Le An Pham</Link>, company: 'MAISS', position: "President", logo: '../../../assets/companysLogos/MAISS.png' },
        { name: <Link component={RouterLink} to="/active-brothers/matthew-nagata" color="inherit">Matthew Nagata</Link>, company: 'MAISS', position: "VP of Finance" },
        { name: <Link component={RouterLink} to="/active-brothers/ian-han" color="inherit">Ian Han</Link>, company: 'MAISS', position: "VP of Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/tyler-newman" color="inherit">Tyler Newman</Link>, company: 'MAISS', position: "VP of Community Development" },
        { name: <Link component={RouterLink} to="/active-brothers/Ryan-Miranda" color="inherit">Ryan Miranda</Link>, company: 'MAISS', position: "VP of Professional Development" },
        { name: <Link component={RouterLink} to="/active-brothers/linda-woo" color="inherit">Linda Woo</Link>, company: 'MAISS', position: 'Mentor' },
        { name: <Link component={RouterLink} to="/active-brothers/naishal-shah" color="inherit">Naishal Shah</Link>, company: 'MAISS', position: 'Mentor' },
        { name: <Link component={RouterLink} to="/active-brothers/emily-nguyen" color="inherit">Emily Nguyen</Link>, company: 'MAISS', position: 'Mentor' },
        { name: <Link component={RouterLink} to="/active-brothers/yong-lin" color="inherit">Yong Lin</Link>, company: 'MAISS', position: 'Mentor' },
        { name: <Link component={RouterLink} to="/active-brothers/philip-cheung" color="inherit">Philip Cheung</Link>, company: 'MAISS', position: 'Mentor' },
        { name: <Link component={RouterLink} to="/active-brothers/joshua-tong" color="inherit">Joshua Tong</Link>, company: 'MAISS', position: 'Mentor' },

    ],
    AA: [
        { name: <Link component={RouterLink} to="/active-brothers/david-sonq" color="inherit">David Sonq</Link>, company: 'Accounting Association', position: 'Director of Professional Development' },
        { name: <Link component={RouterLink} to="/active-brothers/sera-xu" color="inherit">Sera Xu</Link>, company: 'Accounting Association', position: "Committee Board Officer" },
        { name: <Link component={RouterLink} to="/active-brothers/andrew-duong" color="inherit">Andrew Duong</Link>, company: 'Accounting Association', position: 'Committee Board Officer' },
        { name: <Link component={RouterLink} to="/active-brothers/andrew-duong" color="inherit">Andrew Duong</Link>, company: 'AA Leadership Development Program', position: 'Mentor' },
        { name: <Link component={RouterLink} to="/active-brothers/tiffany-chan" color="inherit">Tiffany Chan</Link>, company: 'AA Leadership Development Program', position: 'Mentor' },

    ],
    UFA: [
        { name: <Link component={RouterLink} to="/active-brothers/yong-lin" color="inherit">Yong Lin</Link>, company: 'UFA', position: 'President' },
        { name: <Link component={RouterLink} to="/active-brothers/lucian-liu" color="inherit">Lucian Liu</Link>, company: 'UFA', position: 'Executive Vice President' },
        { name: <Link component={RouterLink} to="/active-brothers/serian-nguyen" color="inherit">Serina Nguyen</Link>, company: 'UFA', position: 'Marketing Director' },

    ],
    UBA: [
        { name: <Link component={RouterLink} to="/active-brothers/stephen-minn" color="inherit">Stephen Minn</Link>, company: 'UBA', position: 'President' },
        { name: <Link component={RouterLink} to="/active-brothers/julian-rachman" color="inherit">Julian Rachman</Link>, company: 'UBA', position: 'Vice President' },
        { name: <Link component={RouterLink} to="/active-brothers/sera-xu" color="inherit">Sera Xu</Link>, company: 'UBA', position: 'Finance Director' },
        { name: <Link component={RouterLink} to="/active-brothers/faith-chia" color="inherit">Faith Chia</Link>, company: 'UBA', position: 'Marketing Director' },
        { name: <Link component={RouterLink} to="/active-brothers/catherine-nguyen" color="inherit">Catherine Nguyen</Link>, company: 'UBA', position: 'Marketing Director' },

    ],
    MA: [
        { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, company: 'MA', position: "President" },
        { name: <Link component={RouterLink} to="/active-brothers/serina-nguyen" color="inherit">Serina Nguyen</Link>, company: 'MA', position: 'VP of Internal Affairs' },
    ],
    MUSA: [
        { name: <Link component={RouterLink} to="/active-brothers/joshua-tong" color="inherit">Joshua Tong</Link>, company: 'MUSA', position: 'VP of Technology' },
        { name: <Link component={RouterLink} to="/active-brothers/lucian-liu" color="inherit">Lucian Liu</Link>, company: 'MUSA', position: 'VP of Finance' },
    ],
    HRMA: [
        { name: <Link component={RouterLink} to="/active-brothers/sahana-vairavaraj" color="inherit">Sahana Vairavaraj</Link>, company: 'HRMA', position: "VP of Operations" },
        { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, company: 'HRMA', position: "VP of Finance" },
    ],
    BAP: [
        { name: <Link component={RouterLink} to="/#/active-brothers/tiffany-wong" color="inherit">Tiffany Wong</Link>, company: 'Beta Alpha Psi', position: "Vice President" },
    ],
    SMIF: [
        { name: <Link component={RouterLink} to="/active-brothers/yong-lin" color="inherit">Yong Lin</Link>, company: 'SMIF', position: 'Macroeconomics Team Lead' },
        { name: <Link component={RouterLink} to="/active-brothers/naishal-shah" color="inherit">Naishal Shah</Link>, company: 'SMIF', position: "Analyst" },
    ],
    ASUCI: [
        { name: <Link component={RouterLink} to="/active-brothers/emily_nguyen" color="inherit">Emily Nguyen</Link>, company: 'ASUCI', position: "Media & Technology Commissioner" },
        { name: <Link component={RouterLink} to="/active-brothers/joshua-tong" color="inherit">Joshua Tong</Link>, company: 'ASUCI', position: 'Content Creation Commissioner' },
    ],
    other: [
        { name: <Link component={RouterLink} to="/active-brothers/tiffany-chan" color="inherit">Tiffany Chan</Link>, company: 'UCI Dragon Boat', position: "President" },
        { name: <Link component={RouterLink} to="/active-brothers/linda-woo" color="inherit">Linda Woo</Link>, company: 'Phi Zeta Tau', position: 'Fundraising Chair' },
        { name: <Link component={RouterLink} to="/active-brothers/jeffrey-cho" color="inherit">Jeffrey Cho</Link>, company: 'Anteater Ambassadors Network', position: 'Supervisor' },
        { name: <Link component={RouterLink} to="/active-brothers/linda-woo" color="inherit">Linda Woo</Link>, company: 'Phi Zeta Tau', position: 'Webmistress' },
    ]

};

export default { involvements };