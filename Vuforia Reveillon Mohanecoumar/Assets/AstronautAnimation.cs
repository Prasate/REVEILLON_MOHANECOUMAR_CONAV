using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AstronautAnimation : MonoBehaviour {


    private Animator m_Animator;
    private bool drill = false;
    private bool wave = false;
    private bool idle = false;

    // Use this for initialization
    void Start () {
        m_Animator = gameObject.GetComponent<Animator>();
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown(KeyCode.D))
        {
            Debug.Log("Toggle Drilling");
            wave = false;
            m_Animator.SetBool("IsWaving", wave);
            drill = !drill;
            m_Animator.SetBool("IsDrilling", drill);
        }

        if (Input.GetKeyDown(KeyCode.W))
        {
            Debug.Log("Waving");
            drill = false;
            m_Animator.SetBool("IsDrilling", drill); m_Animator.SetBool("IsWaving", wave);
            wave = !wave;
            m_Animator.SetBool("IsWaving", wave);
        }

        if (Input.GetKeyDown(KeyCode.Space))
        {
            Debug.Log("Resetting");
            wave = false;
            drill = false;
            m_Animator.SetBool("IsWaving", wave);
            m_Animator.SetBool("IsDrilling", drill);
        }
    }
}
