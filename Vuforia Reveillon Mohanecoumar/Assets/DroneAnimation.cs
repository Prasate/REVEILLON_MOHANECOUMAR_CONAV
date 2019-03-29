using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DroneAnimation : MonoBehaviour {


    private Animator m_Animator;
    private bool scan = false;
    private bool laser = false;
    


    // Use this for initialization
    void Start () {
        m_Animator = gameObject.GetComponent<Animator>();
    }
	
	// Update is called once per frame
	void Update () {
        if (Input.GetKeyDown(KeyCode.S))
        {
            Debug.Log("Toggle Scanning");
            laser = false;
            m_Animator.SetBool("IsShowingLaser", laser);
            scan = !scan;
            m_Animator.SetBool("IsScanning", scan);
        }

        if (Input.GetKeyDown(KeyCode.L))
        {
            Debug.Log("ShowingLaser");
            scan = false;
            m_Animator.SetBool("IsScanning", scan); m_Animator.SetBool("IsShowingLaser", laser);
            laser = !laser;
            m_Animator.SetBool("IsShowingLaser", laser);
        }

        if (Input.GetKeyDown(KeyCode.Space))
        {
            Debug.Log("Resetting");
            laser = false;
            scan = false;
            m_Animator.SetBool("IsShowingLaser", laser);
            m_Animator.SetBool("IsScanning", scan);
        }
    }
}
